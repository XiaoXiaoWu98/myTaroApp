var os = require('os');
var name = require('git-user-name');
var path = require('path');
module.exports = function (source) {
  return {
    templates: [
      // 当在 pages 目录下新建一个文件夹时，向这个文件夹内注入 .dtpl/page 下的文件
      {
        matches: function () {
          let { rawModuleName } = source.basicData;
          // 如果是大写开头的文件，不生成
          if (/^[A-Z]/.test(rawModuleName)) {
            return false;
          }

          return source.isDirectory && /^pages?$/.test(source.basicData.dirName);
        },
        name: './page',
        localData: {
          DirName: (([first, ...rest]) => first.toUpperCase() + rest.join(''))(
            source.basicData.fileName,
          ),
        },
        inject: function () {
          let { rawModuleName, dirName, dirPath, rootPath, filePath } = source.basicData;
          let page = [dirName, rawModuleName, 'index'].join('/');

          let packageName = (dirPath.match(/packages\/([-\w]+)\//) || [])[1];
          let pageInjectMapName = 'page';
          if (packageName) {
            pageInjectMapName += ':' + packageName;
          }

          const pagePath = packageName ? `/packages/${packageName}/${page}` : '/' + page;

          // 向 app.json 和 base/MyApp.ts 中注入内容
          let configTs = path.join(rootPath, 'src/app.config.ts');
          // let routerTs = path.join(
          //     rootPath,
          //     'src/base/router/index.ts'
          // )
          // let AppConfigTs = path.join(rootPath, 'src/appConfig.ts')
          // let customRouterJs = path.join(
          //     rootPath,
          //     'config/h5CustomRouts.js'
          // )

          return [
            {
              file: configTs,
              data: {
                [pageInjectMapName]: '"' + page + '",',
              },
              tags: 'loose',
              append: true,
            },
            // {
            //     file: routerTs,
            //     data: {
            //         pagesMap: camelCase(rawModuleName) + ': Url',
            //     },
            //     tags: 'loose',
            //     append: true,
            // },
            // {
            //     file: customRouterJs,
            //     data: {
            //         ['page']:
            //             '"' +
            //             pagePath +
            //             '": ' +
            //             '"/' +
            //             toMiddleLine(rawModuleName) +
            //             '",',
            //     },
            //     tags: 'loose',
            //     append: true,
            // },
          ];
        },
      },

      // 当在 components 目录下新建一个文件夹时，向这个文件夹内注入 .dtpl/component 下的文件
      {
        matches: function () {
          let { rawModuleName } = source.basicData;
          // 如果是小写写开头的文件夹，不生成
          if (/^[a-z]/.test(rawModuleName)) {
            return false;
          }

          return source.isDirectory && source.basicData.filePath.includes('components');
        },
        name: './component/',
      },

      // 当在 hooks 目录下新建一个文件时，向这个文件内注入 .dtpl/template/hooks.ts.dtpl 的内容
      {
        name: 'hooks/hooks.ts.dtpl',
        matches: function () {
          let { rawModuleName } = source.basicData;

          // 如果名称不是以use+一个大写字母开头的话，则不生成
          if (!/^use+[A-Z]/.test(rawModuleName)) {
            return false;
          }
          return 'src/hooks/*.ts';
        },
      },
    ],
    globalData: {
      dollar: '$',
      style: 'less',
      projectName: "Tokyo's miniProgram",
      author: name() || os.userInfo().username,
    },
  };
};

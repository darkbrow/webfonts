// ==UserScript==
// @name        CSS-All sites
// @description This is your new file, start writing code
// @version     1.0.3
// @match       *://*/*
// ==/UserScript==
// Your CSS as text
var styles = `
@font-face {
  font-family: "Pretendard Variable";
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/orioncactus/pretendard/main/packages/pretendard/dist/web/variable/woff2/PretendardVariable.woff2')
    format("woff2-variations");
}

@font-face {
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/nanumgothic.woff2') format('woff2');
}
@font-face {
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/nanumgothicbold.woff2') format('woff2');
}
@font-face {
  font-family: 'NanumGothic';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/nanumgothicextrabold.woff2') format('woff2');
}
@font-face {
  font-family: 'NanumMyeongjo';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/nanummyeongjo.woff2') format('woff2');
}
@font-face {
  font-family: 'NanumMyeongjo';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/nanummyeongjobold.woff2') format('woff2');
}
@font-face {
  font-family: 'NanumMyeongjo';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/nanummyeongjoextrabold.woff2') format('woff2');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr200.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr300.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr400.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr500.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr600.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr700.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr800.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr900.woff2') format('woff2');
}

@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr200.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr300.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr400.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr500.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr600.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr700.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr800.woff2') format('woff2');
}
@font-face {
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr900.woff2') format('woff2');
}

@font-face {
  font-family: 'AppleGothic';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('AppleSDGothicNeo-Regular'), local('HelveticaNeue'),
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr400.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}
@font-face {
  font-family: 'AppleGothic';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('AppleSDGothicNeo-Bold'), local('HelveticaNeue-Bold'),
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr700.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}

@font-face {
  font-family: 'Gulim';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr400.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}
@font-face {
  font-family: 'Gulim';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr700.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}

@font-face {
  font-family: 'Dotum';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr400.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}
@font-face {
  font-family: 'Dotum';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr700.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}

@font-face {
  font-family: 'AppleMyungjo';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr400.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}
@font-face {
  font-family: 'AppleMyungjo';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr700.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}

@font-face {
  font-family: 'Batang';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr400.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}
@font-face {
  font-family: 'Batang';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr700.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}

@font-face {
  font-family: 'Gungsuh';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr400.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}
@font-face {
  font-family: 'Gungsuh';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notoserifkr700.woff2') format('woff2');
  unicode-range: U+0000-FFFF;
}

@font-face {
  font-family: 'Malgun Gothic';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Malgun Gothic'), local('MalgunGothic'), 
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MalgunGothic.woff2') format('woff2');
}
@font-face {
  font-family: 'Malgun Gothic';
  font-style: normal;
  font-weight: 350;
  font-display: swap;
  src: local('Malgun Gothic Semilight'), local('MalgunGothic-Semilight'), 
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MalgunGothic-Semilight.woff2') format('woff2');
}
@font-face {
  font-family: 'Malgun Gothic';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Malgun Gothic Bold'), local('MalgunGothicBold'), 
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MalgunGothicBold.woff2') format('woff2');
}

@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('MonacoPL-Regular'), local('Monaco'), 
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MonacoPL-Regular.woff2') format('woff2');
  unicode-range:
    U+0020-007E,          /* 기본 라틴 (ASCII) */
    U+00A0-00FF,          /* 라틴 보충 */
    U+2000-206F;          /* 일반 구두점 */
}
@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSansMonoCJKkr-Regular.woff2') format('woff2');
  unicode-range:
    U+AC00-D7A3,          /* 한글 완성형 */
    U+1100-11FF,          /* 한글 자모 */
    U+3130-318F,          /* 한글 호환 자모 */
    U+A960-A97F,          /* 한글 자모 확장-A */
    U+D7B0-D7FF,          /* 한글 자모 확장-B */
    U+4E00-9FFF,          /* CJK 통합 한자 */
    U+F900-FAFF,          /* CJK 호환 한자 */
    U+FF00-FFEF,          /* 전각/반각 */
    U+3000-303F;          /* CJK 기호·구두점 */
}
@font-face {
  font-family: 'Monaco';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: local('MonacoPL-Italic'), local('Monaco'),
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MonacoPL-Italic.woff2') format('woff2');
}
@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('MonacoPL-Bold'), local('Monaco'), 
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MonacoPL-Bold.woff2') format('woff2');
  unicode-range:
    U+0020-007E,          /* 기본 라틴 (ASCII) */
    U+00A0-00FF,          /* 라틴 보충 */
    U+2000-206F;          /* 일반 구두점 */
}
@font-face {
  font-family: 'Monaco';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSansMonoCJKkr-Bold.woff2') format('woff2');
  unicode-range:
    U+AC00-D7A3,          /* 한글 완성형 */
    U+1100-11FF,          /* 한글 자모 */
    U+3130-318F,          /* 한글 호환 자모 */
    U+A960-A97F,          /* 한글 자모 확장-A */
    U+D7B0-D7FF,          /* 한글 자모 확장-B */
    U+4E00-9FFF,          /* CJK 통합 한자 */
    U+F900-FAFF,          /* CJK 호환 한자 */
    U+FF00-FFEF,          /* 전각/반각 */
    U+3000-303F;          /* CJK 기호·구두점 */
}
@font-face {
  font-family: 'Monaco';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: local('MonacoPL-BoldItalic'), local('Monaco'),
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/MonacoPL-BoldItalic.woff2') format('woff2');
}

@font-face {
  font-family: 'Consolas';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('ConsolasPL-Regular'), local('Consolas'), 
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/ConsolasPL.woff2') format('woff2');
  unicode-range:
    U+0020-007E,          /* 기본 라틴 (ASCII) */
    U+00A0-00FF,          /* 라틴 보충 */
    U+2000-206F;          /* 일반 구두점 */
}
@font-face {
  font-family: 'Consolas';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSansMonoCJKkr-Regular.woff2') format('woff2');
  unicode-range:
    U+AC00-D7A3,          /* 한글 완성형 */
    U+1100-11FF,          /* 한글 자모 */
    U+3130-318F,          /* 한글 호환 자모 */
    U+A960-A97F,          /* 한글 자모 확장-A */
    U+D7B0-D7FF,          /* 한글 자모 확장-B */
    U+4E00-9FFF,          /* CJK 통합 한자 */
    U+F900-FAFF,          /* CJK 호환 한자 */
    U+FF00-FFEF,          /* 전각/반각 */
    U+3000-303F;          /* CJK 기호·구두점 */
}
@font-face {
  font-family: 'Consolas';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src:  local('ConsolasPL-Italic'), local('Consolas'),
        url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/ConsolasPL-Italic.woff2') format('woff2');
}
@font-face {
  font-family: 'Consolas';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('ConsolasPL-Bold'), local('Consolas'), 
       url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/ConsolasPL-Bold.woff2') format('woff2');
  unicode-range:
    U+0020-007E,          /* 기본 라틴 (ASCII) */
    U+00A0-00FF,          /* 라틴 보충 */
    U+2000-206F;          /* 일반 구두점 */
}
@font-face {
  font-family: 'Consolas';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/NotoSansMonoCJKkr-Bold.woff2') format('woff2');
  unicode-range:
    U+AC00-D7A3,          /* 한글 완성형 */
    U+1100-11FF,          /* 한글 자모 */
    U+3130-318F,          /* 한글 호환 자모 */
    U+A960-A97F,          /* 한글 자모 확장-A */
    U+D7B0-D7FF,          /* 한글 자모 확장-B */
    U+4E00-9FFF,          /* CJK 통합 한자 */
    U+F900-FAFF,          /* CJK 호환 한자 */
    U+FF00-FFEF,          /* 전각/반각 */
    U+3000-303F;          /* CJK 기호·구두점 */
}
@font-face {
  font-family: 'Consolas';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src:  local('ConsolasPL-BoldItalic'), local('Consolas'),
        url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/ConsolasPL-BoldItalic.woff2') format('woff2');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://raw.githubusercontent.com/darkbrow/webfonts/main/woff2/notosanskr400.woff2') format('woff2');
}

html, body {
  font-family: 'Noto Sans KR', 'Pretendard Variable', 'Malgun Gothic', -apple-system, BlinkMacSystemFont, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility; */
}

pre, code, .blob-code, .blob-code-marker {
  font-family: 'Consolas', 'Monaco', 'ui-monospace', monospace !important;
  font-size: 0.9em !important;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

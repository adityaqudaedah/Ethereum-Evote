import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
    /* cyrillic-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2');
      unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2');
      unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* devanagari */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLFj_Z11lFc-K.woff2) format('woff2');
      unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLFj_Z1JlFc-K.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLFj_Z1xlFQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* devanagari */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2) format('woff2');
      unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* devanagari */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
      unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* devanagari */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDD4Z11lFc-K.woff2) format('woff2');
      unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDD4Z1JlFc-K.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
      `}
  />
);

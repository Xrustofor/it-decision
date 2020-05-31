module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    options: {
      whitelistPatterns: [ 
        /-(leave|enter|appear)(|-(to|from|active))$/, 
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ],
    },
  },
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        st: '#2E2E2E',
      },
      spacing:{
        
      }
    },
    fontFamily:{
      'sans': ['Montserrat'],
    },
    fontSize:{
      'xs': '.75rem', //-12px
      'sm': '.812rem', //-13px
      'tiny': '.875rem',//-14px
      'base': '.937rem', //-15px
      'lg': '1.125rem', //-18px
      'xl': '1.375rem', //-22px
      '2xl': '1.75rem', //-28px
    },
    boxShadow: {
      default: '0px 15px 30px rgba(0, 0, 0, 0.1);',
      'none': 'none',
    }
  },
  variants: {},
  plugins: [],
}

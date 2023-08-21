/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/index.html"],
    theme: {
      extend: {
        fontSize:{
          smh1: '1.8rem',
          lgh1: '3.25rem',
          headerP: '1.25rem',  
          headerBtn: '1.05rem',
          featuresBtn: '0.8rem',
          lgservicesh3: '2.625rem',
          servicesh3: '1.6rem',
          servicesdivh3: '1.28rem',
          servicesp: '1.15rem',
          lgfeaturesh4: ' 2.1875rem',
          featuresh4: '1.4rem',
          featuresp: '1.1rem',
          footerh3: '1.3rem',

        },
        fontWeight: {
          h1: 700,
          servicseh3: 700,
          servicesdivh3: '800',
        },
        lineHeight: {
          smh1:'normal',
          lgh1: '4.0625rem',
          lgservicseh3: '2.9375rem',
          servicesh3: '1.6rem',
          lgfeaturesh4: '2.75rem',
          featuresh4: '1.6rem',
          footerli: '3rem',

        },
        width:{
          smh1: '90%',
          lgh1: '35.625rem',
          lgheaderP: 560,
          smheaderp: '86%',
          smheaderImg: '96%',
          lgheaderImg: '30%',
          headerBtn: '41%',
          lgheaderBtn: '9.9375rem',
          featuresBtn: '9rem',
          servicesh6: '40%',
          lgservicesh6: '10%',
          servicesh3: '95%',
          lgservicseh3: '55%',
          servicesdiv: '85%',
          lgservicesdiv: '23.875rem',
          lgpartnersimg: '76%',
          lgfeaturesh4: '31.25rem',
          featuresh4: '94%',
          featuresp: '90%',
          lgfeaturesp: '30.9375rem',
          featuresimg: '95%',
          lgdownloadimg: '35%',
          appstore: '40%',
          lgfooterp: '18.4375rem',
          footerp: '98%',
        },
        height:{
          servicesdiv: '23.875rem',
        },
        colors:{
          h1color: '#2E242F',
          headerP: 'rgba(46, 36, 47, 0.7)',
          background: '#F5F5F5',
          spanblue: '#7B9EE0',
          partnersBg: '#F9F8FA',
          servicesh6: ' #FAFAFA',
          servicesdiv: '#FFFFFF',
          partnersborder: '#e5e4e6',
          footerbg: '#7B9EE0',   
        },
        fontFamily: {
          'biotif': ['biotif'],
          'gilroy': ['gilroy'],
        },
        padding: {
          servicesdiv: '1.1875rem',
        },
        screens:{
          'sm': '640px',
          'md':'1024px',
          'lg': '1280px',
        },       
      },
    },
    plugins: [],
  }



  // https://wondrous-starship-5fc130.netlify.app/
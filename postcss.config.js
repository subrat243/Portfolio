module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "defaults",
        "not IE 11",
        "not IE_Mob 11",
        "maintained node versions",
      ],
      grid: true,
      flexbox: "no-2009",
    },
  },
};

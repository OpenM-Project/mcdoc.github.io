module.exports = {
	content: [
		'./.vitepress/**/*.{js,ts,vue}',
		'./**/*.md',
	],
    plugins: [
        // require('daisyui'), // bug with navbar
        // require("rippleui"), // bug with navbar
        // require('preline/plugin'), // doesn't work
      ],

}
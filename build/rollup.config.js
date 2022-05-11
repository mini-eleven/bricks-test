import typescript2 from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { name } from '../package.json'

const file = (type) => `dist/${name}.${type}.js`
const tsOverrides = {
	compilerOptions: { declaration: true },
	exclude: ['node_modules', 'src/App.vue', 'src/main.ts'],
}

export { name, file }
export default {
	input: 'src/index.ts',
	output: {
		name,
		file: file('esm'),
		format: 'es',
	},
	plugins: [
		nodeResolve(), // 未生效??? 4-4
		typescript2({ tsconfigOverride: tsOverrides }),
		vue(),
		css({ output: 'bundle.css' }),
	],
	external: ['vue', 'lodash-es'],
}

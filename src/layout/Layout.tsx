import { FunctionComponent } from 'react'

import { LayoutProps } from './Layout.props'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className="flex flex-col justify-between min-h-[100vh]">
			<main className="p-2 max-sm:p-1">{children}</main>
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}

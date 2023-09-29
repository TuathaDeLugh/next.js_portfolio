// export { default } from 'next-auth/middleware'

// export const config = {
// 	matcher: ['/admin/match'],
// 	pages: {
// 		signIn: '/admin',
// 	},
// }

import { withAuth } from 'next-auth/middleware'

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(req) {
		console.log('req.nextauth.token')
	},

	{
		callbacks: {
			authorized: ({ req, token }) => {
				if (
					!(
						req.nextUrl.pathname.startsWith('/admin') ||
						req.nextUrl.pathname.startsWith('/api/admin')
					)
				)
					return true

				if (
					(req.nextUrl.pathname.startsWith('/admin') ||
						req.nextUrl.pathname.startsWith('/api/admin')) &&
					token?.role !== 'admin'
				)
					return false
			},
		},
		pages: {
			signIn: '/admin',
		},
	}
)

// export const config = { matcher: ['/admin/'] }

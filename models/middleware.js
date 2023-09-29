
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
					(req.nextUrl.pathname.startsWith('/admin') ||
						req.nextUrl.pathname.startsWith('/api/admin')) &&
					token?.role !== 'admin'
				)
					return false
			},
		},
		pages: {
			signIn: '/',
		},
	}
)

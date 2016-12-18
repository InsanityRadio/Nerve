module Nerve
	module Routes
		class Posts < Sinatra::Application
			error Models::NotFound do
				error 404
			end

			get '/posts/:slug' do
				@post = Post.first!(slug: params[:slug])
				erb :post
			end
		end
	end
end
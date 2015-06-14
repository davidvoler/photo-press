import tornado


class BaseHandler(tornado.web.RequestHandler):

    def get_current_user(self):
        return self.get_cookie("photo-press")

    def has_permission(self, user, action):
        return True

from django.urls import path
from .views import MemberView, CreateMemberView

urlpatterns = [
    path('member', MemberView.as_view()),
    path('member/create', CreateMemberView.as_view()),
]

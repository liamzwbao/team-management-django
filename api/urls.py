from django.urls import path
from .views import MemberView, GetMemberView, CreateMemberView, UpdateMemberView

urlpatterns = [
    path('member', MemberView.as_view()),
    path('member/<int:pk>', GetMemberView.as_view()),
    path('member/create', CreateMemberView.as_view()),
    path('member/update/<int:pk>', UpdateMemberView.as_view()),
]

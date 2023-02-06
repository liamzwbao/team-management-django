from django.urls import path
from .views import MemberView, GetMemberView, CreateMemberView, UpdateMemberView, DeleteMemberView

urlpatterns = [
    path('member', MemberView.as_view()),
    path('member/<int:pk>', GetMemberView.as_view()),
    path('member/create', CreateMemberView.as_view()),
    path('member/update/<int:pk>', UpdateMemberView.as_view()),
    path('member/delete/<int:pk>', DeleteMemberView.as_view()),
]

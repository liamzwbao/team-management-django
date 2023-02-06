from rest_framework import generics
from .models import Member
from .serializers import MemberSerializer, CreateMemberSerializer


class MemberView(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


class CreateMemberView(generics.CreateAPIView):
    serializer_class = CreateMemberSerializer

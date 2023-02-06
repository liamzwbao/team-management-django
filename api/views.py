from rest_framework import generics
from .models import Member
from .serializers import MemberSerializer, GetMemberSerializer, CreateMemberSerializer


class MemberView(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


class GetMemberView(generics.RetrieveAPIView):
    queryset = Member.objects.all()
    serializer_class = GetMemberSerializer


class CreateMemberView(generics.CreateAPIView):
    serializer_class = CreateMemberSerializer

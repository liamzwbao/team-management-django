from rest_framework import generics
from .models import Member
from .serializers import MemberSerializer, GetMemberSerializer, CreateMemberSerializer, UpdateMemberSerializer


class MemberView(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


class GetMemberView(generics.RetrieveAPIView):
    queryset = Member.objects.all()
    serializer_class = GetMemberSerializer


class CreateMemberView(generics.CreateAPIView):
    serializer_class = CreateMemberSerializer


class UpdateMemberView(generics.UpdateAPIView):
    queryset = Member.objects.all()
    serializer_class = UpdateMemberSerializer

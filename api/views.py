from rest_framework import generics
from .models import Member
from .serializers import MemberSerializer


class MemberView(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

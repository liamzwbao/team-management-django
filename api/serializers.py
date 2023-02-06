from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id', 'first_name', 'last_name', 'email',
                  'phone', 'role', 'role_description')

    role = serializers.SerializerMethodField()

    def get_role(self, obj):
        return obj.get_role_display()

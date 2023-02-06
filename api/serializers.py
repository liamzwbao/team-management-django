from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'role', 'role_description')

    role = serializers.SerializerMethodField()

    def get_role(self, obj):
        return obj.get_role_display()


class GetMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'role', 'role_description')


class CreateMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('first_name', 'last_name', 'email', 'phone', 'role')


class UpdateMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'role')


class DeleteMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id',)

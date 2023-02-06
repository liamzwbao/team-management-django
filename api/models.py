from django.db import models


class Member(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)

    class Role(models.TextChoices):
        REGULAR = 'REG', 'Regular'
        ADMIN = 'ADM', 'Admin'

    role = models.CharField(
        max_length=3, choices=Role.choices, default=Role.REGULAR)

    @property
    def role_description(self):
        if self.role == self.Role.REGULAR:
            return "Can't delete members"
        elif self.role == self.Role.ADMIN:
            return "Can delete members"
        else:
            return "No description"

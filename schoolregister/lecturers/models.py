from django.db import models

# Create your models here.

class Lecturer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    department = models.CharField(max_length=255)
    number_of_courses = models.PositiveIntegerField(default=0)

    def __unicode__(self):
        return u'%s (%s)' % (self.name, self.email)

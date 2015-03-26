from django.conf.urls import patterns, url

from lecturers import views

urlpatterns = patterns('',
    url(r'^$', views.lecturer_listing, name='lecturer_listing'),
    url(r'^(\d+)/$', views.lecturer_details, name='lecturer_details'),
    url(r'^(\d+)/increase_number_of_courses$', views.lecturer_increase_number_of_courses, 
    	name='lecturer_increase_number_of_courses'),
)
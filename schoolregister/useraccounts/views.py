from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def user_login(request):
	context = {}
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password'] 
		user = authenticate(username=username, password=password)
		if user is not None:
			login(request, user)
			return redirect('frontpage')
		else:
			context['login_failed'] = True
	return render(request, 'useraccounts/login.html', context)

def user_logout(request):
	logout(request)
	return redirect('frontpage')
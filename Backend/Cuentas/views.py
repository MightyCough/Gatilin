from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Usuario
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = Usuario.objects.create(
            username=email, 
            email=email, 
            password=make_password(password),
        )
        return JsonResponse(status=200)
    else:
        return JsonResponse(body="Falló el registro\n¿Estás usando tu correo institucional?")

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, username=email, password=password)
        if user is not None:
            cofradia = user.id_cofradia
            login(request, user)
            return JsonResponse(status=200, data={'cofradia': cofradia})
        else:
            return HttpResponse("Invalid credentials")
    else:
        return HttpResponse("Invalid request")

@login_required
def logout_view(request):
    logout(request)
    return HttpResponse("Logged out successfully")
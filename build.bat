@echo off
:START
set /p build=Enter fe for frontend be for backend and c for complete app:

if  "%build%"=="c" (
    echo Building The Complete app
    GOTO :COMPLETE
)

if  "%build%"=="fe" (
    echo Building frontend
    pushd frontend
    docker compose -f .\docker-compose.yaml -p frontend  up --build -d
    popd
    exit
)

if  "%build%"=="be" (
    echo Building backend
    GOTO :SERVER
)

:COMPLETE
if exist "server\dist" (
    echo Removing old folder ......
    pushd server
    rmdir /s /q "dist"
    popd 
)

pushd frontend
call npm run build
move "dist" "..\server"
popd

:SERVER
pushd server
call docker compose  -f .\docker-compose.yaml -p stirup up --build -d
popd
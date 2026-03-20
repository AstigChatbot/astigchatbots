$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8000
$url = "http://localhost:$port/index.html"

function Test-PortOpen {
    param(
        [int]$Port
    )

    try {
        $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
        $listener.Start()
        $listener.Stop()
        return $false
    } catch {
        return $true
    }
}

function Get-PythonCommand {
    if (Get-Command py -ErrorAction SilentlyContinue) {
        return @{ File = 'py'; Args = @('-m', 'http.server', $port) }
    }
    if (Get-Command python -ErrorAction SilentlyContinue) {
        return @{ File = 'python'; Args = @('-m', 'http.server', $port) }
    }

    throw 'Python is not installed or not on PATH.'
}

if (-not (Test-PortOpen -Port $port)) {
    $python = Get-PythonCommand
    $process = Start-Process -FilePath $python.File -ArgumentList $python.Args -WorkingDirectory $repoRoot -PassThru -WindowStyle Minimized
    Start-Sleep -Seconds 2

    if ($process.HasExited) {
        throw "Local server failed to start."
    }
}

Start-Process $url

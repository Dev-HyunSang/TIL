# Installation

## Install kubectl

```shell
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
sudo chown root: /usr/local/bin/kubectl
kubectl version --client
Client Version: v1.35.1
Kustomize Version: v5.7.1
# or using Homebrew
brew install kuebectl
# or
brew install kubernetes-cli
kubectl version --client
```

## Install minikube

```json
brew install minikube
```

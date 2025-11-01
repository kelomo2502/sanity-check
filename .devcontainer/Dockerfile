# Base image for your Codespace
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install core utilities
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    jq \
    wget \
    python3-pip \
    && apt-get clean

# Optional: Install AWS CDK and Terraform tools globally
RUN npm install -g aws-cdk@latest
RUN curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
    https://apt.releases.hashicorp.com $(lsb_release -cs) main" \
    | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update && apt-get install -y terraform

# Set default user
USER vscode

# 맥북 개발환경 설정

## Installation Programs

- [Brave Brower](https://brave.com/)
- [1Password](https://1password.com/downloads/mac)
- [Google Drive Desktop](https://support.google.com/a/users/answer/13022292?hl=en)
- [Cusor](https://cursor.com/)

## Homebrew & oh-my-zsh

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" # Homebrew
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" #oh-my-zsh
```

### oh-my-zsh theme - `powerlevel10k`

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```

```
ZSH_THEME="powerlevel10k/powerlevel10k" 
```

## NVM

```shell
brew install nvm
brew install yarn --ignore-dependencies # yarn 사용 시 Node 설치 제외
```

```
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
```

## Python

```shell
brew update && brew upgrade
brew install readline xz
brew install pyenv
brew install pyenv-virtualenv
```

```shell
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

## Claude

```shell
brew install --cask claude # Install Claude Desktop
curl -fsSL https://claude.ai/install.sh | bash # Install Claude Code
```

### MCP

```json
{
  "mcpServers": {
    "context7": {
      "args": [
        "-y",
        "@upstash/context7-mcp@latest"
      ],
      "command": "npx"
    },
    "sequential-thinking": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-sequential-thinking"
      ]
    },
    "filesystem": {
        "command": "npx",
        "args": [
          "-y",
          "@modelcontextprotocol/server-filesystem",
          "/Users/park.hyunsang/Downloads",
          "/Users/park.hyunsang/dev",
          "/Users/park.hyunsang/hack"
        ]
      },
      "playwright": {
        "command": "npx",
        "args": ["-y", "@executeautomation/playwright-mcp-server"]
      }
  }
}
```

```shell
claude mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking
claude mcp add --transport http context7 https://mcp.context7.com/mcp
```

## Golang

```shell
brew install golang
```

## ETC

### Docker

```shell
brew install --cask docker
```

### Stats

```shell
brew install stats
```

### Hugo

```shell
brew install hugo
```
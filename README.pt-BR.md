<p align="center">
  <img src="./logo.png" alt="logo do i-have-dyslexia" width="760" />
</p>

# i-have-dyslexia

**Versão:** 1.0

Uma Agent Skill pequena para deixar respostas de IA mais fáceis de ler e escanear para pessoas com dislexia.

Ela prioriza frases curtas, palavras simples, quebras frequentes, títulos úteis e pontuação leve. As regras ficam em um único `SKILL.md` canônico, usado pelas integrações do repositório.

**Mantido por [bluemozilla](https://github.com/bluemozilla).**

[English](README.md) · [Instalação](INSTALL.md)

## O que muda

Quando a skill está ativa, o assistente deve:

- manter **uma ideia principal por frase**;
- dividir texto denso em **blocos pequenos e escaneáveis**;
- preferir **palavras comuns** quando isso não reduz a precisão;
- usar **listas e títulos como pontos de referência**;
- sair do modo somente após **`stop dyslexia mode`** ou **`normal mode`**.

As regras completas estão em [`skills/i-have-dyslexia/SKILL.md`](skills/i-have-dyslexia/SKILL.md).

## Atalho rápido: `\dys` / `/dys`

Para instalar o alias curto no seu usuário:

```bash
python3 scripts/install_alias.py
```

O instalador cria o alias `dys` nos diretórios compartilhados de Agent Skills e nos locais de comandos usados por Claude Code, Gemini CLI, Qwen Code e Cursor. O Kimi também consegue usar o alias compartilhado em `~/.agents/skills/dys`.

**No Pi, `\dys` funciona diretamente**, sem instalar alias extra. Também existem `/dys`, `/dys on` e `/dys off`.

Para remover os aliases do usuário:

```bash
python3 scripts/install_alias.py --remove
```

## Integrações preparadas

| Host | Arquivos neste repositório |
| --- | --- |
| Claude Code | `.claude-plugin/` e `skills/` |
| Codex | `.codex-plugin/` e `.agents/skills/` |
| Gemini CLI | `gemini-extension.json` e `skills/` |
| Qwen Code | `qwen-extension.json` e `skills/` |
| Kimi Code CLI | `kimi.plugin.json` e `skills/` |
| Pi | `package.json`, extensão TypeScript e `skills/` |
| Cursor | `.agents/skills/` |

## Instalação rápida

### Claude Code

```text
/plugin marketplace add bluemozilla/i-have-dyslexia
/plugin install i-have-dyslexia@bluemozilla-skills
/i-have-dyslexia:i-have-dyslexia
```

### Gemini CLI

```bash
gemini extensions install https://github.com/bluemozilla/i-have-dyslexia
```

### Qwen Code

```bash
qwen extensions install bluemozilla/i-have-dyslexia
```

Depois:

```text
/i-have-dyslexia
```

### Kimi Code CLI

Dentro do Kimi Code:

```text
/plugins install https://github.com/bluemozilla/i-have-dyslexia
/reload
/skill:i-have-dyslexia
```

### Pi

```bash
pi install git:github.com/bluemozilla/i-have-dyslexia
```

Ative rapidamente com:

```text
\dys
```

Ou use a forma com barra:

```text
/dys
```

O comando original continua disponível:

```text
/i-have-dyslexia
```

Ou inicie já ativo:

```bash
pi --dyslexia
```

### Cursor e outros hosts de Agent Skills

O repositório contém `.agents/skills/i-have-dyslexia/SKILL.md` para descoberta dentro do projeto. Para uso pessoal/global, copie essa pasta para o diretório de skills do seu host.

Veja [`INSTALL.md`](INSTALL.md) para os detalhes.

## Persistência depende do host

O `SKILL.md` manda o assistente manter o modo até uma frase de saída. Mesmo assim, alguns hosts podem reavaliar skills sob demanda em cada turno.

**No Pi, o repositório reforça a persistência por código.** A extensão salva o estado da sessão e injeta as regras em cada turno enquanto o modo estiver ligado.

Nos outros hosts, a persistência depende da forma como o cliente mantém skills e contexto da conversa.

## Licença

MIT. Veja [`LICENSE`](LICENSE).

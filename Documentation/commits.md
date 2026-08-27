## 📌 Estrutura Básica

```text
<tipo>(escopo opcional): <descrição curta e objetiva>

[corpo opcional explicando o porquê da mudança]

[rodapé opcional para issues/breaking changes]
```

---

## 📋 Tabela de Tipos de Commit

| Prefixo / Tipo | Quando Usar | Exemplo Prático |
| :--- | :--- | :--- |
| **`feat`** | Nova funcionalidade voltada ao usuário final | `feat(list): add option to delete individual items` |
| **`fix`** | Correção de bugs ou comportamentos inesperados | `fix(input): prevent adding empty string to options` |
| **`style`** | Ajustes de estilo, formatação, CSS ou espaçamento (sem mexer na lógica) | `style(modal): update result card background and typography` |
| **`refactor`** | Reestruturação de código que não altera comportamento nem corrige bugs | `refactor: extract draw logic into custom hook` |
| **`perf`** | Melhorias de performance no código | `perf: optimize array filtering on large lists` |
| **`chore`** | Tarefas de manutenção, configs de build, configs de ferramentas ou dependências | `chore: setup vite project and configure eslint` |
| **`docs`** | Alterações em documentações (README, guias, comentários) | `docs: add local setup instructions in README` |
| **`test`** | Criação ou refatoração de testes automatizados | `test(draw): add unit test for random selection function` |
| **`ci`** | Alterações em arquivos e scripts de integração contínua (GitHub Actions, etc.) | `ci: configure automated build check workflow` |

---

## ⚡ Regras de Ouro do Time

1. **Use o imperativo no presente:**
   - ❌ *Added new button* ou *Criando componente*
   - ✅ *Add new button* ou *Adiciona botão de sorteio*
2. **Primeira letra minúscula:**
   - ❌ `feat: Add new modal`
   - ✅ `feat: add new modal`
3. **Sem ponto final no título:**
   - ❌ `fix: prevent duplicate keys.`
   - ✅ `fix: prevent duplicate keys`
4. **Commits atômicos (uma responsabilidade por commit):**
   - Evite subir em um único commit uma alteração de CSS junto com uma correção de regra de negócio. Divida em commits menores (`style:` e `fix:`).
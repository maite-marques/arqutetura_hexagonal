# arqutetura_hexagonal

Projeto baseado no curso `Arquitetura Limpa e Hexagonal` da udemy, com o instrutor Leonardo Moura Leitão da cod3r.

## Conceitos

A `Orientação a Objetos` é a disciplina sobre a transferência indireta de controle, tornando o polimorfismo como um dos pilares mais importantes do ponto de vista arquitetural.

`Inversão de dependências` do SOLID.

As `interfaces` permitem que sejam realizadas diversas implementações concretas diferentes. São as `portas` e as implementações são os `adaptadores`.


### pastas
app - interface gráfica da aplicação
  - fluxos serão chamados a partir do menu
  - DIP - Dependency Inversion Principal (soliD).

core - classes que representam a lógica e os conceitos que serão usados
  - criar interfaces (portas)
  as interfaces serão usadas no padrão de design port and adapters (arquitetura hexagonal)

# arqutetura_hexagonal

Projeto baseado no curso [`Arquitetura Limpa e Hexagonal`](https://www.udemy.com/course/arquitetura-limpa-e-hexagonal/?kw=domine+arquitetura+lim&src=sac&couponCode=25BBPMXINACTIVE) da udemy, com o instrutor Leonardo Moura Leitão da cod3r.

# Notas do curso
## Conceitos

A `Orientação a Objetos` é a disciplina sobre a transferência indireta de controle, tornando o polimorfismo como um dos pilares mais importantes do ponto de vista arquitetural.

`Inversão de dependências` do SOLID. Abstrair as dependências externas.

As `interfaces` permitem que sejam realizadas diversas implementações concretas diferentes. São as `portas` e as implementações são os `adaptadores`.

Uma `Porta` permite mais de um provedor se conecte a sua aplicação atráves desta interface ou regra de implementação definida. A porta faz parte do Core da sua aplicação.

Na arquitetura hexagonal uma classe que implementa uma porta é um `adaptador`. E um adaptador não faz parte do core bussines da aplicação.

### pastas
app - interface gráfica da aplicação
  - fluxos serão chamados a partir do menu
  - DIP - Dependency Inversion Principal (soliD).

core - classes que representam a lógica e os conceitos que serão usados (entidades e caso de uso)
  - criar interfaces (portas)
  as interfaces serão usadas no padrão de design port and adapters (arquitetura hexagonal)
  - todas as dependências externas devem estar dentro da própria pasta core 

adapters - diversos adaptadores externos que não fazem parte do core bussines da aplicação
  - auth - senha cripto
  - banco de dados
  dependências externas
# Ветка develop – основная ветка разработки.
В ней находится самая актуальная рабочая версия проекта, собираются вместе все готовые части функциональности по мере их завершения.

## Каждый участник команды, и тим лид команды в том числе, ведут разработку в своих собственных ветках. 

- Название ветки даётся в соответствии с реализуемой частью функциональности. 
- Данные ветки создаются при начале разработки каждой фичи от develop (актуальной на тот момент).
- Все мержи в ветку develop происходят только через Pull Request. Для того, чтобы разрешить merge conflicts, нужно смержить ветку develop в свою feature ветку.

## Ветка считается готовой к мержу в develop, если все комментарии помечены как resolved и как минимум два члена команды поставили approve. 
Resolve комментария может делать только тот человек, который его оставил.

## После разрешения на мерж, каждый сам мержит свой Pull request.
Если требуется – разрешает конфликты. Это очень важный опыт.

## В ревьюверы включать не только тим лида и куратора группы, но и участников команды. 
Это позволяет каждому попробовать себя в роли ревьюера, видеть все реализованные фичи, каким образом они работают.

## От каждого участника команды ожидается минимум пять коммитов и минимум два собственных Pull Request, замерженых в ветку develop. 

Если требования к минимальному количеству коммитов и Pull Request от каждого участника не выполняется, команде начисляются штрафные баллы за недостатки в организации командной работы.

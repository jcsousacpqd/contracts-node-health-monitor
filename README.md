
# Configurando sua rede 
Configure o arquivo  hardhat.config.ts com o endereço de sua rede e a chave privada:

## Execute 

```shell
npm install
npx hardhat compile
```

# Deploy e Inicializaçao de contratos 
Após configurar sua rede, você pode proceder com o deploy e a inicialização dos contratos. Aqui está uma breve descrição de cada contrato e o processo de inicialização:
 ## Contratos
- ### Node Health Monitor:

  Função report: Configura o contrato com os endereços do RoleControl e do UpgradeControl. Essencial para definir as permissões e controles de acesso na sua aplicação.

  Função report: Configura o contrato com os endereços do RoleControl e do UpgradeControl. Essencial para definir as permissões e controles de acesso na sua aplicação.

  Função report: Configura o contrato com os endereços do RoleControl e do UpgradeControl. Essencial para definir as permissões e controles de acesso na sua aplicação.


## Executando o Deploy e Inicialização

 Rode o seguinte comando para realizar o deploy dos contratos e inicializá-los na rede:

```shell
npx hardhat ignition deploy ./ignition/modules/NodeHealthMonitor.ts --network local
```

## Endereços dos Contratos

Após a execução do comando, você verá os endereços dos contratos no terminal. Esses endereços são importantes para interagir com os contratos já implantados.

![Ignition Deploy and Initialize](./img/deploy.png)
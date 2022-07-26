const { Pokemon } = require('../../models/listmodel');

module.exports = {
  name: 'newpokemon',
  ownerOnly: true,
  description: 'placeholder',
  options: [
    {
      name: 'number',
      description: 'Choisir le numéro du pokémon',
      type: 'NUMBER',
      required: true,
    },
    {
      name: 'name',
      description: 'Choisir le nom du pokémon',
      type: 'STRING',
      required: true,
    },
    {
      name: 'emoji',
      description: 'Choisir l\'émojie du pokémon',
      type: 'STRING',
      required: true,
    },
    {
      name: 'emojishiny',
      description: 'Choisir l\'émojie du pokémon shiny',
      type: 'STRING',
      required: true,
    },
    {
      name: 'zone',
      description: 'Choisir la zone du pokémon',
      type: 'NUMBER',
      required: true,
    }
  ],
  async runInteraction(client, interaction) {
    const number = interaction.options.getNumber('number');
    const name = interaction.options.getString('name');
    const emoji = interaction.options.getString('emoji');
    const emojiS = interaction.options.getString('emojishiny');
    const zone = interaction.options.getNumber('zone');

    const createPokemon = await new Pokemon({ number: number, name: name, emoji: emoji, emojiShiny: emojiS, zone: zone });
    createPokemon.save().then(p => console.log(`Nouveau pokémon (${p.name})`));
    interaction.reply('Pokémon ajouté dans la BDD');
  }
}
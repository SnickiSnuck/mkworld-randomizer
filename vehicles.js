const vehicleImages = [
  'img/vehicles/B_Dasher.webp',
  'img/vehicles/Baby_Blooper.webp',
  'img/vehicles/Big_Horn.webp',
  'img/vehicles/Billdozer.webp',
  'img/vehicles/Blastronaut_III.webp',
  'img/vehicles/Browser_Bruiser.webp',
  'img/vehicles/Buggybud.webp',
  'img/vehicles/Bumble_V.webp',
  'img/vehicles/Carpet_Flyer.webp',
  'img/vehicles/Chargin_Truck.webp',
  'img/vehicles/Cloud_9.webp',
  'img/vehicles/Cute_Scoot.webp',
  'img/vehicles/Dolphin_Dasher.webp',
  'img/vehicles/Dread_Sled.webp',
  'img/vehicles/Fin_Twin.webp',
  'img/vehicles/Funky_Dorrie.webp',
  'img/vehicles/Hot_Road.webp',
  'img/vehicles/Hyper_Pipe.webp',
  'img/vehicles/Junkyard_Hog.webp',
  'img/vehicles/Lil_Dumpy.webp',
  'img/vehicles/Lobster_Roller.webp',
  'img/vehicles/Loco_Moto.webp',
  'img/vehicles/Mach_Rocket.webp',
  'img/vehicles/Mecha_Trike.webp',
  'img/vehicles/Pipe_Frame.webp',
  'img/vehicles/Plushbuggy.webp',
  'img/vehicles/Rally_Bike.webp',
  'img/vehicles/Rally_Kart.webp',
  'img/vehicles/Rally_Romper.webp',
  'img/vehicles/Rallygator.webp',
  'img/vehicles/Reel_Racer.webp',
  'img/vehicles/Ribbit_Revster.webp',
  'img/vehicles/Roadster_Royale.webp',
  'img/vehicles/ROBHOG.webp',
  'img/vehicles/Standard_Bike.webp',
  'img/vehicles/Standard_Kart.webp',
  'img/vehicles/Tune_Thumper.webp',
  'img/vehicles/W-Twin_Chopper.webp',
  'img/vehicles/Zoom_Buggy.webp'
];

const characterImages = [
  'img/characters/Baby_Daisy.webp',
  'img/characters/Baby_Luigi.webp',
  'img/characters/Baby_Mario.webp',
  'img/characters/Baby_Peach.webp',
  'img/characters/Baby_Rosalina.webp',
  'img/characters/Biddybud.webp',
  'img/characters/Birdo.webp',
  'img/characters/Bowser_Jr.webp',
  'img/characters/Bowser.webp',
  'img/characters/Cataquack.webp',
  'img/characters/Chargin_Chuck.webp',
  'img/characters/Cheep_Cheep.webp',
  'img/characters/Coin_Coffer.webp',
  'img/characters/Conkdor.webp',
  'img/characters/Cow.webp',
  'img/characters/Daisy.webp',
  'img/characters/Dolphin.webp',
  'img/characters/Donkey_Kong.webp',
  'img/characters/Dry_Bones.webp',
  'img/characters/Fishbone.webp',
  'img/characters/Goomba.webp',
  'img/characters/Hammerbro.webp',
  'img/characters/King_Boo.webp',
  'img/characters/Lakitu.webp',
  'img/characters/Luigi.webp',
  'img/characters/Mario.webp',
  'img/characters/Monty_Mole.webp',
  'img/characters/Nabbit.webp',
  'img/characters/Pauline.webp',
  'img/characters/Pianta.webp',
  'img/characters/Piranha_Plant_Racer.webp',
  'img/characters/Pokey.webp',
  'img/characters/Rocky_Wrench.webp',
  'img/characters/Rosalina.webp',
  'img/characters/Shy_Guy.webp',
  'img/characters/Sidestepper.webp',
  'img/characters/Snowman.webp',
  'img/characters/Spike.webp',
  'img/characters/Stingby.webp',
  'img/characters/Swoop.webp',
  'img/characters/Toad.webp',
  'img/characters/Toadette.webp',
  'img/characters/Waluigi.webp',
  'img/characters/Wario.webp',
  'img/characters/Wiggler.webp',
  'img/characters/Yoshi.webp'
];

const vehicleImg = document.getElementById('vehicleImg');
const characterImg = document.getElementById('characterImg');
const randomizeButton = document.getElementById('randomizeButton');
const vehicleText = document.getElementById('vehicleText');
const characterText = document.getElementById('characterText');

function getVehicleNameFromPath(path) {
  // Extracts the filename, removes extension, replaces underscores with spaces
  const fileName = path.split('/').pop().replace('.webp', '');
  return fileName.replace(/_/g, ' ');
}

function getCharacterNameFromPath(path) {
  // Extracts the filename, removes extension, replaces underscores with spaces
  const fileName = path.split('/').pop().replace('.webp', '');
  return fileName.replace(/_/g, ' ');
}

function randomize() {
  const vehicleIndex = Math.floor(Math.random() * vehicleImages.length);
  const characterIndex = Math.floor(Math.random() * characterImages.length);

  vehicleImg.src = vehicleImages[vehicleIndex];
  characterImg.src = characterImages[characterIndex];

  if (vehicleText) {
    vehicleText.textContent = getVehicleNameFromPath(vehicleImages[vehicleIndex]);
  }
  if (characterText) {
    characterText.textContent = getCharacterNameFromPath(characterImages[characterIndex]);
  }
}
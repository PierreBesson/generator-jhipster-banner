const chalk = require('chalk');
const generator = require('yeoman-generator');
const packagejs = require('../../package.json');
const figlet = require('figlet');

// Stores JHipster variables
const jhipsterVar = { moduleName: 'banner' };

// Stores JHipster functions
const jhipsterFunc = {},
      SERVER_MAIN_RES_DIR = 'src/main/resources/';

module.exports = generator.extend({

    initializing: {
        compose() {
            this.composeWith('jhipster:modules',
                { jhipsterVar, jhipsterFunc },
                this.options.testmode ? { local: require.resolve('generator-jhipster/generators/modules') } : null
            );
        },
        displayLogo() {
            // Have Yeoman greet the user.
            this.log(`Welcome to the ${chalk.bold.yellow('JHipster banner')} generator! ${chalk.yellow(`v${packagejs.version}\n`)}`);
        }
    },

    prompting() {
        const done = this.async();
        const prompts = [
            {
                type: 'input',
                name: 'bannerMessage',
                message: 'Input the banner message you wish to convert to ASCII art',
                default: jhipsterVar.baseName
            },
            {
                type: 'list',
                name: 'bannerFont',
                message: 'Which font would you like to use ?',
                default: 'ANSI Shadow',
            choices: [
{
    value: '1Row',
    name: '1Row'
},
{
    value: '3-D',
    name: '3-D'
},
{
    value: '3D Diagonal',
    name: '3D Diagonal'
},
{
    value: '3D-ASCII',
    name: '3D-ASCII'
},
{
    value: '3x5',
    name: '3x5'
},
{
    value: '4Max',
    name: '4Max'
},
{
    value: '5 Line Oblique',
    name: '5 Line Oblique'
},
{
    value: 'AMC 3 Line',
    name: 'AMC 3 Line'
},
{
    value: 'AMC 3 Liv1',
    name: 'AMC 3 Liv1'
},
{
    value: 'AMC AAA01',
    name: 'AMC AAA01'
},
{
    value: 'AMC Neko',
    name: 'AMC Neko'
},
{
    value: 'AMC Razor',
    name: 'AMC Razor'
},
{
    value: 'AMC Razor2',
    name: 'AMC Razor2'
},
{
    value: 'AMC Slash',
    name: 'AMC Slash'
},
{
    value: 'AMC Slider',
    name: 'AMC Slider'
},
{
    value: 'AMC Thin',
    name: 'AMC Thin'
},
{
    value: 'AMC Tubes',
    name: 'AMC Tubes'
},
{
    value: 'AMC Untitled',
    name: 'AMC Untitled'
},
{
    value: 'ANSI Shadow',
    name: 'ANSI Shadow'
},
{
    value: 'ASCII New Roman',
    name: 'ASCII New Roman'
},
{
    value: 'Acrobatic',
    name: 'Acrobatic'
},
{
    value: 'Alligator',
    name: 'Alligator'
},
{
    value: 'Alligator2',
    name: 'Alligator2'
},
{
    value: 'Alpha',
    name: 'Alpha'
},
{
    value: 'Alphabet',
    name: 'Alphabet'
},
{
    value: 'Arrows',
    name: 'Arrows'
},
{
    value: 'Avatar',
    name: 'Avatar'
},
{
    value: 'B1FF',
    name: 'B1FF'
},
{
    value: 'Banner',
    name: 'Banner'
},
{
    value: 'Banner3-D',
    name: 'Banner3-D'
},
{
    value: 'Banner3',
    name: 'Banner3'
},
{
    value: 'Banner4',
    name: 'Banner4'
},
{
    value: 'Barbwire',
    name: 'Barbwire'
},
{
    value: 'Basic',
    name: 'Basic'
},
{
    value: 'Bear',
    name: 'Bear'
},
{
    value: 'Bell',
    name: 'Bell'
},
{
    value: 'Benjamin',
    name: 'Benjamin'
},
{
    value: 'Big Chief',
    name: 'Big Chief'
},
{
    value: 'Big Money-ne',
    name: 'Big Money-ne'
},
{
    value: 'Big Money-nw',
    name: 'Big Money-nw'
},
{
    value: 'Big Money-se',
    name: 'Big Money-se'
},
{
    value: 'Big Money-sw',
    name: 'Big Money-sw'
},
{
    value: 'Big',
    name: 'Big'
},
{
    value: 'Bigfig',
    name: 'Bigfig'
},
{
    value: 'Binary',
    name: 'Binary'
},
{
    value: 'Block',
    name: 'Block'
},
{
    value: 'Blocks',
    name: 'Blocks'
},
{
    value: 'Bloody',
    name: 'Bloody'
},
{
    value: 'Bolger',
    name: 'Bolger'
},
{
    value: 'Braced',
    name: 'Braced'
},
{
    value: 'Bright',
    name: 'Bright'
},
{
    value: 'Broadway KB',
    name: 'Broadway KB'
},
{
    value: 'Broadway',
    name: 'Broadway'
},
{
    value: 'Bubble',
    name: 'Bubble'
},
{
    value: 'Bulbhead',
    name: 'Bulbhead'
},
{
    value: 'Caligraphy',
    name: 'Caligraphy'
},
{
    value: 'Caligraphy2',
    name: 'Caligraphy2'
},
{
    value: 'Calvin S',
    name: 'Calvin S'
},
{
    value: 'Cards',
    name: 'Cards'
},
{
    value: 'Catwalk',
    name: 'Catwalk'
},
{
    value: 'Chiseled',
    name: 'Chiseled'
},
{
    value: 'Chunky',
    name: 'Chunky'
},
{
    value: 'Coinstak',
    name: 'Coinstak'
},
{
    value: 'Cola',
    name: 'Cola'
},
{
    value: 'Colossal',
    name: 'Colossal'
},
{
    value: 'Computer',
    name: 'Computer'
},
{
    value: 'Contessa',
    name: 'Contessa'
},
{
    value: 'Contrast',
    name: 'Contrast'
},
{
    value: 'Cosmike',
    name: 'Cosmike'
},
{
    value: 'Crawford',
    name: 'Crawford'
},
{
    value: 'Crawford2',
    name: 'Crawford2'
},
{
    value: 'Crazy',
    name: 'Crazy'
},
{
    value: 'Cricket',
    name: 'Cricket'
},
{
    value: 'Cursive',
    name: 'Cursive'
},
{
    value: 'Cyberlarge',
    name: 'Cyberlarge'
},
{
    value: 'Cybermedium',
    name: 'Cybermedium'
},
{
    value: 'Cybersmall',
    name: 'Cybersmall'
},
{
    value: 'Cygnet',
    name: 'Cygnet'
},
{
    value: 'DANC4',
    name: 'DANC4'
},
{
    value: 'DWhistled',
    name: 'DWhistled'
},
{
    value: 'Dancing Font',
    name: 'Dancing Font'
},
{
    value: 'Decimal',
    name: 'Decimal'
},
{
    value: 'Def Leppard',
    name: 'Def Leppard'
},
{
    value: 'Delta Corps Priest 1',
    name: 'Delta Corps Priest 1'
},
{
    value: 'Diamond',
    name: 'Diamond'
},
{
    value: 'Diet Cola',
    name: 'Diet Cola'
},
{
    value: 'Digital',
    name: 'Digital'
},
{
    value: 'Doh',
    name: 'Doh'
},
{
    value: 'Doom',
    name: 'Doom'
},
{
    value: 'Dot Matrix',
    name: 'Dot Matrix'
},
{
    value: 'Double Shorts',
    name: 'Double Shorts'
},
{
    value: 'Double',
    name: 'Double'
},
{
    value: 'Dr Pepper',
    name: 'Dr Pepper'
},
{
    value: 'Efti Chess',
    name: 'Efti Chess'
},
{
    value: 'Efti Font',
    name: 'Efti Font'
},
{
    value: 'Efti Italic',
    name: 'Efti Italic'
},
{
    value: 'Efti Piti',
    name: 'Efti Piti'
},
{
    value: 'Efti Robot',
    name: 'Efti Robot'
},
{
    value: 'Efti Wall',
    name: 'Efti Wall'
},
{
    value: 'Efti Water',
    name: 'Efti Water'
},
{
    value: 'Electronic',
    name: 'Electronic'
},
{
    value: 'Elite',
    name: 'Elite'
},
{
    value: 'Epic',
    name: 'Epic'
},
{
    value: 'Fender',
    name: 'Fender'
},
{
    value: 'Filter',
    name: 'Filter'
},
{
    value: 'Fire Font-k',
    name: 'Fire Font-k'
},
{
    value: 'Fire Font-s',
    name: 'Fire Font-s'
},
{
    value: 'Flipped',
    name: 'Flipped'
},
{
    value: 'Flower Power',
    name: 'Flower Power'
},
{
    value: 'Four Tops',
    name: 'Four Tops'
},
{
    value: 'Fraktur',
    name: 'Fraktur'
},
{
    value: 'Fun Face',
    name: 'Fun Face'
},
{
    value: 'Fun Faces',
    name: 'Fun Faces'
},
{
    value: 'Fuzzy',
    name: 'Fuzzy'
},
{
    value: 'Georgi16',
    name: 'Georgi16'
},
{
    value: 'Georgia11',
    name: 'Georgia11'
},
{
    value: 'Ghost',
    name: 'Ghost'
},
{
    value: 'Ghoulish',
    name: 'Ghoulish'
},
{
    value: 'Glenyn',
    name: 'Glenyn'
},
{
    value: 'Goofy',
    name: 'Goofy'
},
{
    value: 'Gothic',
    name: 'Gothic'
},
{
    value: 'Graceful',
    name: 'Graceful'
},
{
    value: 'Gradient',
    name: 'Gradient'
},
{
    value: 'Graffiti',
    name: 'Graffiti'
},
{
    value: 'Greek',
    name: 'Greek'
},
{
    value: 'Heart Left',
    name: 'Heart Left'
},
{
    value: 'Heart Right',
    name: 'Heart Right'
},
{
    value: 'Henry 3D',
    name: 'Henry 3D'
},
{
    value: 'Hex',
    name: 'Hex'
},
{
    value: 'Hieroglyphs',
    name: 'Hieroglyphs'
},
{
    value: 'Hollywood',
    name: 'Hollywood'
},
{
    value: 'Horizontal Left',
    name: 'Horizontal Left'
},
{
    value: 'Horizontal Right',
    name: 'Horizontal Right'
},
{
    value: 'ICL-1900',
    name: 'ICL-1900'
},
{
    value: 'Impossible',
    name: 'Impossible'
},
{
    value: 'Invita',
    name: 'Invita'
},
{
    value: 'Isometric1',
    name: 'Isometric1'
},
{
    value: 'Isometric2',
    name: 'Isometric2'
},
{
    value: 'Isometric3',
    name: 'Isometric3'
},
{
    value: 'Isometric4',
    name: 'Isometric4'
},
{
    value: 'Italic',
    name: 'Italic'
},
{
    value: 'Ivrit',
    name: 'Ivrit'
},
{
    value: 'JS Block Letters',
    name: 'JS Block Letters'
},
{
    value: 'JS Bracket Letters',
    name: 'JS Bracket Letters'
},
{
    value: 'JS Capital Curves',
    name: 'JS Capital Curves'
},
{
    value: 'JS Cursive',
    name: 'JS Cursive'
},
{
    value: 'JS Stick Letters',
    name: 'JS Stick Letters'
},
{
    value: 'Jacky',
    name: 'Jacky'
},
{
    value: 'Jazmine',
    name: 'Jazmine'
},
{
    value: 'Jerusalem',
    name: 'Jerusalem'
},
{
    value: 'Katakana',
    name: 'Katakana'
},
{
    value: 'Kban',
    name: 'Kban'
},
{
    value: 'Keyboard',
    name: 'Keyboard'
},
{
    value: 'Knob',
    name: 'Knob'
},
{
    value: 'Konto Slant',
    name: 'Konto Slant'
},
{
    value: 'Konto',
    name: 'Konto'
},
{
    value: 'LCD',
    name: 'LCD'
},
{
    value: 'Larry 3D 2',
    name: 'Larry 3D 2'
},
{
    value: 'Larry 3D',
    name: 'Larry 3D'
},
{
    value: 'Lean',
    name: 'Lean'
},
{
    value: 'Letters',
    name: 'Letters'
},
{
    value: 'Lil Devil',
    name: 'Lil Devil'
},
{
    value: 'Line Blocks',
    name: 'Line Blocks'
},
{
    value: 'Linux',
    name: 'Linux'
},
{
    value: 'Lockergnome',
    name: 'Lockergnome'
},
{
    value: 'Madrid',
    name: 'Madrid'
},
{
    value: 'Marquee',
    name: 'Marquee'
},
{
    value: 'Maxfour',
    name: 'Maxfour'
},
{
    value: 'Merlin1',
    name: 'Merlin1'
},
{
    value: 'Merlin2',
    name: 'Merlin2'
},
{
    value: 'Mike',
    name: 'Mike'
},
{
    value: 'Mini',
    name: 'Mini'
},
{
    value: 'Mirror',
    name: 'Mirror'
},
{
    value: 'Mnemonic',
    name: 'Mnemonic'
},
{
    value: 'Modular',
    name: 'Modular'
},
{
    value: 'Morse',
    name: 'Morse'
},
{
    value: 'Morse2',
    name: 'Morse2'
},
{
    value: 'Moscow',
    name: 'Moscow'
},
{
    value: 'Mshebrew210',
    name: 'Mshebrew210'
},
{
    value: 'Muzzle',
    name: 'Muzzle'
},
{
    value: 'NScript',
    name: 'NScript'
},
{
    value: 'NT Greek',
    name: 'NT Greek'
},
{
    value: 'NV Script',
    name: 'NV Script'
},
{
    value: 'Nancyj-Fancy',
    name: 'Nancyj-Fancy'
},
{
    value: 'Nancyj-Improved',
    name: 'Nancyj-Improved'
},
{
    value: 'Nancyj-Underlined',
    name: 'Nancyj-Underlined'
},
{
    value: 'Nancyj',
    name: 'Nancyj'
},
{
    value: 'Nipples',
    name: 'Nipples'
},
{
    value: 'O8',
    name: 'O8'
},
{
    value: 'OS2',
    name: 'OS2'
},
{
    value: 'Octal',
    name: 'Octal'
},
{
    value: 'Ogre',
    name: 'Ogre'
},
{
    value: 'Old Banner',
    name: 'Old Banner'
},
{
    value: 'Patorjk\'s Cheese',
    name: 'Patorjk\'s Cheese'
},
{
    value: 'Patorjk-HeX',
    name: 'Patorjk-HeX'
},
{
    value: 'Pawp',
    name: 'Pawp'
},
{
    value: 'Peaks Slant',
    name: 'Peaks Slant'
},
{
    value: 'Peaks',
    name: 'Peaks'
},
{
    value: 'Pebbles',
    name: 'Pebbles'
},
{
    value: 'Pepper',
    name: 'Pepper'
},
{
    value: 'Poison',
    name: 'Poison'
},
{
    value: 'Puffy',
    name: 'Puffy'
},
{
    value: 'Puzzle',
    name: 'Puzzle'
},
{
    value: 'Pyramid',
    name: 'Pyramid'
},
{
    value: 'Rammstein',
    name: 'Rammstein'
},
{
    value: 'Rectangles',
    name: 'Rectangles'
},
{
    value: 'Red Phoenix',
    name: 'Red Phoenix'
},
{
    value: 'Relief',
    name: 'Relief'
},
{
    value: 'Relief2',
    name: 'Relief2'
},
{
    value: 'Reverse',
    name: 'Reverse'
},
{
    value: 'Roman',
    name: 'Roman'
},
{
    value: 'Rot13',
    name: 'Rot13'
},
{
    value: 'Rotated',
    name: 'Rotated'
},
{
    value: 'Rounded',
    name: 'Rounded'
},
{
    value: 'Rowan Cap',
    name: 'Rowan Cap'
},
{
    value: 'Rozzo',
    name: 'Rozzo'
},
{
    value: 'Runic',
    name: 'Runic'
},
{
    value: 'Runyc',
    name: 'Runyc'
},
{
    value: 'S Blood',
    name: 'S Blood'
},
{
    value: 'SL Script',
    name: 'SL Script'
},
{
    value: 'Santa Clara',
    name: 'Santa Clara'
},
{
    value: 'Script',
    name: 'Script'
},
{
    value: 'Serifcap',
    name: 'Serifcap'
},
{
    value: 'Shadow',
    name: 'Shadow'
},
{
    value: 'Shimrod',
    name: 'Shimrod'
},
{
    value: 'Short',
    name: 'Short'
},
{
    value: 'Slant Relief',
    name: 'Slant Relief'
},
{
    value: 'Slant',
    name: 'Slant'
},
{
    value: 'Slide',
    name: 'Slide'
},
{
    value: 'Small Caps',
    name: 'Small Caps'
},
{
    value: 'Small Isometric1',
    name: 'Small Isometric1'
},
{
    value: 'Small Keyboard',
    name: 'Small Keyboard'
},
{
    value: 'Small Poison',
    name: 'Small Poison'
},
{
    value: 'Small Script',
    name: 'Small Script'
},
{
    value: 'Small Shadow',
    name: 'Small Shadow'
},
{
    value: 'Small Slant',
    name: 'Small Slant'
},
{
    value: 'Small Tengwar',
    name: 'Small Tengwar'
},
{
    value: 'Small',
    name: 'Small'
},
{
    value: 'Soft',
    name: 'Soft'
},
{
    value: 'Speed',
    name: 'Speed'
},
{
    value: 'Spliff',
    name: 'Spliff'
},
{
    value: 'Stacey',
    name: 'Stacey'
},
{
    value: 'Stampate',
    name: 'Stampate'
},
{
    value: 'Stampatello',
    name: 'Stampatello'
},
{
    value: 'Standard',
    name: 'Standard'
},
{
    value: 'Star Strips',
    name: 'Star Strips'
},
{
    value: 'Star Wars',
    name: 'Star Wars'
},
{
    value: 'Stellar',
    name: 'Stellar'
},
{
    value: 'Stforek',
    name: 'Stforek'
},
{
    value: 'Stick Letters',
    name: 'Stick Letters'
},
{
    value: 'Stop',
    name: 'Stop'
},
{
    value: 'Straight',
    name: 'Straight'
},
{
    value: 'Stronger Than All',
    name: 'Stronger Than All'
},
{
    value: 'Sub-Zero',
    name: 'Sub-Zero'
},
{
    value: 'Swamp Land',
    name: 'Swamp Land'
},
{
    value: 'Swan',
    name: 'Swan'
},
{
    value: 'Sweet',
    name: 'Sweet'
},
{
    value: 'THIS',
    name: 'THIS'
},
{
    value: 'Tanja',
    name: 'Tanja'
},
{
    value: 'Tengwar',
    name: 'Tengwar'
},
{
    value: 'Term',
    name: 'Term'
},
{
    value: 'Test1',
    name: 'Test1'
},
{
    value: 'The Edge',
    name: 'The Edge'
},
{
    value: 'Thick',
    name: 'Thick'
},
{
    value: 'Thin',
    name: 'Thin'
},
{
    value: 'Thorned',
    name: 'Thorned'
},
{
    value: 'Three Point',
    name: 'Three Point'
},
{
    value: 'Ticks Slant',
    name: 'Ticks Slant'
},
{
    value: 'Ticks',
    name: 'Ticks'
},
{
    value: 'Tiles',
    name: 'Tiles'
},
{
    value: 'Tinker-Toy',
    name: 'Tinker-Toy'
},
{
    value: 'Tombstone',
    name: 'Tombstone'
},
{
    value: 'Train',
    name: 'Train'
},
{
    value: 'Trek',
    name: 'Trek'
},
{
    value: 'Tsalagi',
    name: 'Tsalagi'
},
{
    value: 'Tubular',
    name: 'Tubular'
},
{
    value: 'Twisted',
    name: 'Twisted'
},
{
    value: 'Two Point',
    name: 'Two Point'
},
{
    value: 'USA Flag',
    name: 'USA Flag'
},
{
    value: 'Univers',
    name: 'Univers'
},
{
    value: 'Varsity',
    name: 'Varsity'
},
{
    value: 'Wavy',
    name: 'Wavy'
},
{
    value: 'Weird',
    name: 'Weird'
},
{
    value: 'Wet Letter',
    name: 'Wet Letter'
},
{
    value: 'Whimsy',
    name: 'Whimsy'
},
{
    value: 'Wow',
    name: 'Wow'
}
            ]
        },
         {
            type: 'list',
            name: 'bannerColor',
            message: 'Which color would you like to use ?',
            default: 'BLUE',
        choices: [
{
    value: 'BLACK',
    name: 'BLACK'
},
{
    value: 'BLUE',
    name: 'BLUE'
},
{
    value: 'BRIGHT_BLACK',
    name: 'BRIGHT_BLACK'
},
{
    value: 'BRIGHT_BLUE',
    name: 'BRIGHT_BLUE'
},
{
    value: 'BRIGHT_CYAN',
    name: 'BRIGHT_CYAN'
},
{
    value: 'BRIGHT_GREEN',
    name: 'BRIGHT_GREEN'
},
{
    value: 'BRIGHT_MAGENTA',
    name: 'BRIGHT_MAGENTA'
},
{
    value: 'BRIGHT_RED',
    name: 'BRIGHT_RED'
},
{
    value: 'BRIGHT_WHITE',
    name: 'BRIGHT_WHITE'
},
{
    value: 'BRIGHT_YELLOW',
    name: 'BRIGHT_YELLOW'
},
{
    value: 'CYAN',
    name: 'CYAN'
},
{
    value: 'DEFAULT',
    name: 'DEFAULT'
},
{
    value: 'GREEN',
    name: 'GREEN'
},
{
    value: 'MAGENTA',
    name: 'MAGENTA'
},
{
    value: 'RED',
    name: 'RED'
},
{
    value: 'WHITE',
    name: 'WHITE'
},
{
    value: 'YELLOW',
    name: 'YELLOW'
}
        ]},
        {
        type: 'confirm',
        name: 'appendJHipsterMessage',
        message: "Would you like to append 'Generated with ♥ by JHipster' to your banner ?",
        default: true
        }];

        this.prompt(prompts).then((props) => {
            this.props = props;
            done();
        });
    },
    writing() {
        // function to use directly template
        this.template = function (source, destination) {
            this.fs.copyTpl(
                this.templatePath(source),
                this.destinationPath(destination),
                this
            );
        };

        this.bannerMessage = this.props.bannerMessage;
        this.bannerFont = this.props.bannerFont;
        this.bannerColor = this.props.bannerColor;
        this.appendJHipsterMessage = this.props.appendJHipsterMessage;

        this.log(this.bannerMessage)
        this.log(this.bannerColor)
        figlet.text(this.bannerMessage, {
            font: this.bannerFont,
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function(err, asciiArtBannerMessage) {
            if (err) {
                this.log('Error generating the figlet ASCII art banner from the application name, falling back to non ASCII art text');
                this.error(err);
                asciiArtBannerMessage = bannerMessage;
            }
            // Render the banner text with a "generated by JHipster" message
            this.asciiArtBannerMessage = asciiArtBannerMessage;
            this.template('_banner.txt', SERVER_MAIN_RES_DIR + 'banner.txt');
        }.bind(this));
    },

    end() {
        this.log('Banner successfully generated');
    }
});

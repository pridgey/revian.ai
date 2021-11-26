const { getTokens } = require("./ioConverter");
const fs = require("fs");

const dataset = [];

const addToDataset = (input, output) => {
  //   dataset.push({
  //     input: input.map((part) => getTokens(part, "e").id),
  //     output: output.map((part) => getTokens(part, "r").id),
  //   });
  dataset.push({
    input,
    output,
  });
};

// To Speak <-> Sba
addToDataset(["TO", " ", "SP", "EAK"], ["SBA"]);
// Speaker <-> Sbali
addToDataset(["SP", "EAK", "ER"], ["SBA", "LI"]);
// River <-> Reviati
addToDataset(["RIV", "ER"], ["RE", "VI", "ATI"]);
// Haunting <-> Alesteia
addToDataset(["HAUN", "TING"], ["ALE", "STEI", "A"]);
// To Haunt <-> Alesta
addToDataset(["TO", " ", "HAUN", "T"], ["ALE", "STA"]);
// Ghost <-> Alestei
addToDataset(["GHO", "ST"], ["ALES", "TEI"]);
// One <-> Ini
addToDataset(["ONE"], ["INI"]);
// Two <-> Ati
addToDataset(["TWO"], ["ATI"]);
// Three <-> Ret
addToDataset(["THR", "EE"], ["RET"]);
// Four <-> Tva
addToDataset(["FOUR"], ["TVA"]);
// Five <-> Fi
addToDataset(["FIVE"], ["FI"]);
// Six <-> Hesi
addToDataset(["SIX"], ["HESI"]);
// Seven <-> Svi
addToDataset(["SEV", "EN"], ["SVI"]);
// Eight <-> Oti
addToDataset(["EIGH", "T"], ["OTI"]);
// Nine <-> Gi
addToDataset(["NINE"], ["GI"]);
// Ten <-> Oro
addToDataset(["TEN"], ["ORO"]);
// Zero <-> Voi
addToDataset(["ZERO"], ["VOI"]);
// Ability <-> Bani
addToDataset(["ABI", "LI", "TY"], ["BA", "NI"]);
// Able <-> Cabeia
addToDataset(["ABLE"], ["CAB", "EIA"]);
// About <-> Fond
addToDataset(["ABOU", "T"], ["FOND"]);
// Above <-> Eröbe
addToDataset(["ABO", "VE"], ["ERÖ", "BE"]);
// To Accept <-> Erepta
addToDataset(["TO", " ", "ACC", "EPT"], ["EREP", "TA"]);
// Acceptance <-> Ereptei
addToDataset(["ACC", "EP", "TAN", "CE"], ["EREP", "TEI"]);
// According <-> Nidroge
addToDataset(["ACC", "OR", "DING"], ["NI", "DRO", "GE"]);
// To Account <-> Vanota
addToDataset(["TO", " ", "ACC", "OUNT"], ["VA", "NO", "TA"]);
// Testimony <-> Vanotei
addToDataset(["TES", "TI", "MON", "Y"], ["VA", "NO", "TEI"]);
// Account <-> Fataconi
addToDataset(["ACC", "OUNT"], ["FA", "TA", "CO", "NI"]);
// Across <-> Erory
addToDataset(["AC", "ROSS"], ["ERO", "RY"]);
// To Act <-> Falovi
addToDataset(["TO", " ", "ACT"], ["FA", "LOVI"]);
// Actor <-> Falovei
addToDataset(["ACT", "OR"], ["FA", "LOV", "EI"]);
// Act <-> Voloti
addToDataset(["ACT"], ["VO", "LO", "TI"]);
// Action <-> Rotini
addToDataset(["AC", "TION"], ["RO", "TI", "NI"]);
// Activity <-> Roliani
addToDataset(["ACT", "IVI", "TY"], ["RO", "LIA", "NI"]);
// Actually <-> Voätöm
addToDataset(["ACT", "UAL", "LY"], ["VOÄ", "TÖM"]);
// To Add <-> Ata
addToDataset(["TO", " ", "ADD"], ["ATA"]);
// Pair <-> Atei
addToDataset(["PAIR"], ["ATEI"]);
// To Address <-> Fadrana
addToDataset(["TO", " ", "AD", "DRE", "SS"], ["FA", "DRA", "NA"]);
// Speech <-> Fadranei
addToDataset(["SPEE", "CH"], ["FA", "DRA", "NEI"]);
// Address <-> Revanli
addToDataset(["AD", "DRE", "SS"], ["REV", "AN", "LI"]);
// Administration <-> Ademi
addToDataset(["AD", "MIN", "IS", "TRA", "TION"], ["AD", "EMI"]);
// To Admit <-> Ardema
addToDataset(["TO", " ", "AD", "MIT"], ["AR", "DEM", "A"]);
// Confession <-> Ardemei
addToDataset(["CON", "FES", "SION"], ["AR", "DEM", "EI"]);
// Adult <-> Fadati
addToDataset(["AD", "ULT"], ["FA", "DA", "TI"]);
// To Affect <-> Vafecita
addToDataset(["TO", " ", "AFF", "ECT"], ["VA", "FE", "CITA"]);
// Effect <-> Vafecitei
addToDataset(["EFF", "ECT"], ["VA", "FE", "CI", "TEI"]);
// After <-> Retio
addToDataset(["AF", "TER"], ["RE", "TIO"]);
// Again <-> Vavava
addToDataset(["AG", "AIN"], ["VA", "VA", "VA"]);
// Against <-> Argiagotsin
addToDataset(["AG", "AIN", "ST"], ["AR", "GIA", "GOT", "SIN"]);
// To Age <-> Fathäloma
addToDataset(["TO", " ", "AGE"], ["FA", "THÄ", "LO", "MA"]);
// Age <-> Fathälomei
addToDataset(["AGE"], ["FA", "THÄ", "LO", "MEI"]);
// Agency <-> Favi
addToDataset(["A", "GEN", "CY"], ["FA", "VI"]);
// Agent <-> Fonfavi
addToDataset(["A", "GENT"], ["FON", "FA", "VI"]);
// Ago <-> Esrati
addToDataset(["AGO"], ["ES", "RA", "TI"]);
// To Agree <-> Erostana
addToDataset(["TO", " ", "A", "GREE"], ["ERO", "STA", "NA"]);
// Agreement <-> Erostanei
addToDataset(["A", "GREE", "MENT"], ["ERO", "STA", "NEI"]);
// Ahead <-> Erodany
addToDataset(["A", "HEAD"], ["ERO", "DA", "NY"]);
// Air <-> Ferini
addToDataset(["AIR"], ["FE", "RI", "NI"]);
// All <-> Fonel
addToDataset(["ALL"], ["FO", "NEL"]);
// To Allow <-> Faloa
addToDataset(["TO", " ", "AL", "LOW"], ["FA", "LOA"]);
// Permission <-> Faloei
addToDataset(["PER", "MIS", "SION"], ["FAL", "O", "EI"]);
// Almost <-> Volatöm
addToDataset(["AL", "MOST"], ["VOLA", "TÖM"]);
// Alone <-> Favoieia
addToDataset(["AL", "ONE"], ["FA", "VOI", "EIA"]);
// Along <-> Refat
addToDataset(["A", "LONG"], ["RE", "FAT"]);
// Already <-> Fones
addToDataset(["AL", "REA", "DY"], ["FO", "NES"]);
// Also <-> Yefa
addToDataset(["AL", "SO"], ["YE", "FA"]);
// But <-> Re
addToDataset(["BUT"], ["RE"]);
// Always <-> Fathoro
addToDataset(["AL", "WAYS"], ["FA", "THOR", "O"]);
// Among <-> Stätil
addToDataset(["A", "MONG"], ["STÄ", "TIL"]);
// To Amount <-> Eronona
addToDataset(["TO", " ", "AM", "OUNT"], ["ERO", "NO", "NA"]);
// Worth <-> Erononei
addToDataset(["WOR", "TH"], ["ERO", "NO", "NEI"]);
// Amount <-> Fonvoi
addToDataset(["AM", "OUNT"], ["FON", "VOI"]);
// To Analyze <-> Vamenta
addToDataset(["TO", " ", "ANAL", "YZE"], ["VA", "MEN", "TA"]);
// Analysis <-> Vamentei
addToDataset(["ANA", "LY", "SIS"], ["VA", "MEN", "TEI"]);
// And <-> ost
addToDataset(["AND"], ["OST"]);
// Animal <-> Ferali
addToDataset(["ANI", "MAL"], ["FER", "ALI"]);
// Another <-> Ervava
addToDataset(["AN", "OTH", "ER"], ["ER", "VA", "VA"]);
// To Answer <-> Chilota
addToDataset(["TO", " ", "AN", "SWER"], ["CHI", "LOTA"]);
// Answer <-> Chilotei
addToDataset(["AN", "SWER"], ["CHI", "LO", "TEI"]);
// Any <-> Voifondi
addToDataset(["ANY"], ["VOI", "FON", "DI"]);
// Anyone <-> Voifondini
addToDataset(["ANY", "ONE"], ["VOI", "FOND", "INI"]);
// Anything <-> Voifonsy
addToDataset(["ANY", "TH", "ING"], ["VOI", "FON", "SY"]);
// To Appear <-> Erotfoara
addToDataset(["TO", " ", "AP", "PEAR"], ["EROT", "FO", "ARA"]);
// Appearance <-> Erotfoarei
addToDataset(["AP", "PEAR", "ANCE"], ["EROT", "FOA", "REI"]);
// To Apply <-> Fafora
addToDataset(["TO", " ", "AP", "PLY"], ["FA", "FORA"]);
// Application <-> Faforei
addToDataset(["AP", "PLI", "CA", "TION"], ["FA", "FO", "REI"]);
// To Approach <-> Chana
addToDataset(["TO", " ", "AP", "PRO", "ACH"], ["CHA", "NA"]);
// intimacy <-> Chanei
addToDataset(["IN", "TI", "MA", "CY"], ["CHA", "NEI"]);
// Area <-> Fervo
addToDataset(["A", "REA"], ["FER", "VO"]);
// To Argue <-> Vafonca
addToDataset(["TO", " ", "AR", "GUE"], ["VA", "FON", "CA"]);
// Argument <-> Vafoncei
addToDataset(["AR", "GU", "MENT"], ["VA", "FON", "CEI"]);
// Arm <-> Arvovi
addToDataset(["ARM"], ["AR", "VO", "VI"]);
// Around <-> Vono
addToDataset(["AR", "OUND"], ["VO", "NO"]);
// To Arrive <-> Revöa
addToDataset(["TO", " ", "AR", "RIVE"], ["RE", "VÖA"]);
// Destination <-> Revöei
addToDataset(["DES", "TI", "NA", "TION"], ["RE", "VÖ", "EI"]);
// Art <-> Erolamti
addToDataset(["ART"], ["ERO", "LAM", "TI"]);
// Article <-> Soroni
addToDataset(["AR", "TI", "CLE"], ["SO", "RO", "NI"]);
// Artist <-> Chilani
addToDataset(["AR", "TIST"], ["CHI", "LANI"]);
// As <-> Sono
addToDataset(["AS"], ["SONO"]);
// To Ask <-> Arvofoini
addToDataset(["TO", " ", "ASK"], ["AR", "VO", "FOI", "NI"]);
// question <-> Arvofoinei
addToDataset(["QUES", "TION"], ["AR", "VO", "FOI", "NEI"]);
// To Assume <-> Faltomi
addToDataset(["TO", " ", "AS", "SUME"], ["FAL", "TO", "MI"]);
// Assumption <-> Faltomei
addToDataset(["AS", "SUMP", "TION"], ["FAL", "TO", "MEI"]);
// At <-> Limny
addToDataset(["AT"], ["LIM", "NY"]);
// To Attack <-> Vofatani
addToDataset(["TO", " ", "AT", "TACK"], ["VO", "FA", "TA", "NI"]);
// aggressor <-> Vofatanei
addToDataset(["AG", "GRES", "SOR"], ["VO", "FA", "TA", "NEI"]);
// Attention <-> Laräni
addToDataset(["AT", "TEN", "TION"], ["LA", "RÄ", "NI"]);
// Attorney <-> Birmani
addToDataset(["AT", "TOR", "NEY"], ["BIR", "MANI"]);
// Audience <-> Filasani
addToDataset(["AUD", "I", "ENCE"], ["FIL", "AS", "ANI"]);
// To Write <-> Cäpra
addToDataset(["TO", " ", "WRITE"], ["CÄ", "PRA"]);
// Author <-> Cäprei
addToDataset(["AU", "THOR"], ["CÄ", "PREI"]);
// Authority <-> Fachani
addToDataset(["AU", "THOR", "ITY"], ["FA", "CHA", "NI"]);
// Available <-> Sonotaleia
addToDataset(["A", "VAIL", "ABLE"], ["SO", "NO", "TA", "LEIA"]);
// To Avoid <-> Voireia
addToDataset(["TO", " ", "A", "VOID"], ["VOI", "REI", "A"]);
// Spy <-> Voirei
addToDataset(["SPY"], ["VOI", "REI"]);
// Away <-> Vovoineia
addToDataset(["AWAY"], ["VO", "VOI", "NEIA"]);
// Baby <-> Fili
addToDataset(["BABY"], ["FI", "LI"]);
// To support <-> Solopata
addToDataset(["TO", " ", "SUP", "PORT"], ["SO", "LO", "PA", "TA"]);
// Teammate <-> Solopatei
addToDataset(["TEAM", "MATE"], ["SO", "LO", "PA", "TEI"]);
// Back <-> Vonomani
addToDataset(["BACK"], ["VO", "NO", "MA", "NI"]);
// Bad <-> Voicheia
addToDataset(["BAD"], ["VOI", "CHEI", "A"]);
// To Bag <-> Incapa
addToDataset(["TO", " ", "BAG"], ["IN", "CA", "PA"]);
// Bag <-> Incapei
addToDataset(["BAG"], ["IN", "CA", "PEI"]);
// Ball <-> Vonreni
addToDataset(["BALL"], ["VON", "RENI"]);
// Bank <-> Ödi
addToDataset(["BANK"], ["ÖDI"]);
// Bar <-> Fonliligi
addToDataset(["BAR"], ["FON", "LI", "LI", "GI"]);
// To Base <-> Demona
addToDataset(["TO", " ", "BASE"], ["DE", "MO", "NA"]);
// Base <-> Demonei
addToDataset(["BASE"], ["DE", "MO", "NEI"]);
// To Be <-> Ra
addToDataset(["TO", " ", "BE"], ["RA"]);
// Person <-> Rei
addToDataset(["PER", "SON"], ["REI"]);
// To Beat <-> Vacala
addToDataset(["TO", " ", "BEAT"], ["VO", "CA", "LA"]);
// Victim <-> Vacalei
addToDataset(["VIC", "TIM"], ["VA", "CA", "LEI"]);
// Beat <-> Erocanani
addToDataset(["BEAT"], ["ERO", "CA", "NA", "NI"]);
// Beautiful <-> Cheia
addToDataset(["BE", "A", "UTI", "FUL"], ["CHEI", "A"]);

fs.writeFile("dataset.json", JSON.stringify(dataset), (err) =>
  console.error(err)
);

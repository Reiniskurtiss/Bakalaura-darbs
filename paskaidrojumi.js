// Atbilžu paskaidrojumi kiberhigiēnas prototipam.
// Šis fails satur paskaidrojumu loģiku, lai HTML fails nebūtu pārblīvēts.

function getAnswerSpecificReason(q, answerText, isCorrect) {
    const t = String(answerText).toLowerCase();

    if (isCorrect) {
        if (t.includes("paroļu pārvaldnieku") || t.includes("izmantoju paroļu pārvaldnieku")) {
            return "Paroļu pārvaldnieks palīdz glabāt unikālas paroles katram kontam. Ja viena parole noplūst, tas samazina iespēju, ka ar to var piekļūt arī citiem kontiem.";
        }
        if (t.includes("paroles atjaunošanu") || t.includes("it atbalstu")) {
            return "Nekad nevar būt pilnīgi drošs, kas patiesībā ar Jums sazinās otrā pusē. Tādēļ ir vērts ievērot “Zero Trust” jeb nulles uzticēšanās principu — nepiekrist piekļuves nodošanai vai informācijas izpaušanai, kamēr situācija nav pārbaudīta.";
        }
        if (t.includes("mājasauleceļš7")) {
            return "Šī ir visdrošākā parole, jo tā ir gara paroles frāze, kuru ir grūtāk uzminēt.";
        }
        if (t.includes("r!8v#q2zlp@9")) {
            return "Šī ir otra drošākā parole, jo tā ir sarežģīta un sastāv no dažādiem simboliem, burtiem un cipariem, taču to ir grūtāk atcerēties nekā paroles frāzi.";
        }
        if (t.includes("skola2024")) {
            return "Šī ir vidēji droša parole, jo tajā ir lielais burts, cipari un simbols, bet tā joprojām ir diezgan paredzama.";
        }
        if (t.includes("janis2005")) {
            return "Šī parole ir nedroša, jo tajā izmantots personvārds un gads, ko var viegli uzminēt.";
        }
        if (t.includes("12345678")) {
            return "Šī ir visnedrošākā parole, jo tā ir ļoti izplatīta un viegli uzminama.";
        }
        if (t.includes("aktivizētu svarīgākajiem kontiem")) {
            return "Daudzfaktoru autentifikācija ir viens no pirmajiem soļiem drošākai kontu aizsardzībai. Pat ja pieslēgšanās aizņem par dažām sekundēm ilgāk, tā būtiski samazina iespēju, ka ļaunprātīga persona varēs piekļūt Jūsu kontam tikai ar paroli.";
        }
        if (t.includes("noraidītu pieprasījumu")) {
            return "Pat ja tas izrādās viltus trauksmes gadījums, negaidītu daudzfaktoru autentifikācijas pieprasījumu nevajadzētu ignorēt. Labāk ir pārbaudīt, vai kāds tiešām nav mēģinājis piekļūt Jūsu kontam, jo nekad nevar būt pilnīgi drošs, ka šāda situācija neatkārtosies.";
        }
        if (t.includes("e-pasts a ir aizdomīgs")) {
            return "E-pasts A ir aizdomīgs, jo tajā redzamas pazīmes, kas var liecināt par viltotu e-pastu — gramatikas kļūdas, neierasts rakstības stils, neskaidrs pieprasījums un neatbilstība Jāņa ierastajai saziņai. E-pasts B izskatās uzticamāks, jo teksts ir saprotams, konkrēts un vairāk atbilst dotajam kontekstam.";
        }
        if (t.includes("sūtītāja e-pasta adrese")) {
            return "Sūtītāja adrese palīdz pārbaudīt, vai e-pasts tiešām nāk no zināmas vai oficiālas adreses, nevis no līdzīgas vai maldinošas adreses.";
        }
        if (t.includes("saturs ir loģisks")) {
            return "E-pasta saturs palīdz saprast, vai ziņa atbilst situācijai un vai tajā nav neskaidru vai aizdomīgu prasību.";
        }
        if (t.includes("pieprasītā darbība")) {
            return "Pieprasītā darbība jāvērtē, jo viltotos e-pastos bieži prasa izdarīt kaut ko steidzamu, neparastu vai iepriekš nesaskaņotu.";
        }
        if (t.includes("saites vai pielikumi")) {
            return "Saites un pielikumi ir jāpārbauda, jo tie var aizvest uz viltotu lapu vai saturēt kaitīgu failu.";
        }
        if (t.includes("netiek prasīta parole") || t.includes("kods") || t.includes("sensitīva informācija")) {
            return "Paroles, kodi un sensitīva informācija e-pastā ir īpaši jāvērtē, jo šādu informāciju bieži mēģina iegūt sociālās inženierijas uzbrukumos.";
        }
        if (t.includes("1. pārbaudīt sūtītāja")) {
            return "Vispirms ir jāpārbauda sūtītāja adrese un domēns, jo viltoti e-pasti bieži izmanto līdzīgas vai maldinošas adreses.";
        }
        if (t.includes("2. izvērtēt")) {
            return "Pēc tam jāizvērtē saturs un prasītā rīcība, jo krāpnieciskos e-pastos bieži tiek izmantota steiga, spiediens vai neparasti lūgumi.";
        }
        if (t.includes("3. pārbaudīt saites") || t.includes("pielikuma nepieciešamību")) {
            return "Tālāk jāpārbauda saites vai pielikuma nepieciešamība, tos neatverot, jo tie var novest uz viltotu lapu vai saturēt kaitīgu failu.";
        }
        if (t.includes("4. pārbaudīt informāciju")) {
            return "Ja joprojām ir šaubas, informācija jāpārbauda citā uzticamā kanālā.";
        }
        if (t.includes("5. ziņot it")) {
            return "Ja e-pasts šķiet viltots, par to jāziņo IT atbildīgajai personai, lai varētu pasargāt arī citus lietotājus.";
        }
        if (t.includes("sazinātos ar administrāciju")) {
            return "Ja saņemat e-pastu ar dokumentu vai pielikumu, kuru negaidījāt, vispirms ir jāpārliecinās par tā uzticamību. Pirms tā atvēršanas jāpārbauda, vai sūtītājs ir īsts un vai šāds dokuments tiešām bija gaidīts.";
        }
        if (t.includes("dokumenti.zip")) {
            return "Arhīva fails var būt bīstams, jo tajā var būt paslēpti ļaunprātīgi faili.";
        }
        if (t.includes("pieteikums.docm")) {
            return "DOCM fails var būt bīstams, jo tajā var būt makro komandas, kas spēj izpildīt darbības datorā.";
        }
        if (t.includes("programma.exe")) {
            return "EXE fails ir izpildāms fails, kas var palaist programmu datorā, tāpēc negaidīti saņemts šāda tipa fails ir īpaši riskants.";
        }
        if (t.includes("tabula.xlsm")) {
            return "XLSM fails var būt bīstams, jo tajā var būt makro kods, kas var izpildīt nevēlamas darbības.";
        }
        if (t.includes("nekavējoties nomainītu paroli")) {
            return "Ja zināt, ka Jūsu lietotājvārds un parole ir ievadīti viltotā lapā, parole ir nekavējoties jāmaina. Tas samazina iespēju, ka ļaunprātīga persona izmantos Jūsu kontu. Par situāciju jāziņo arī IT atbildīgajai personai, lai zinātu, kā pareizi rīkoties tālāk.";
        }
        if (t.includes("ekrānšāviņu")) {
            return "Ja rodas aizdomas, ka kaut kas nav tā, kā tam vajadzētu būt, labāk ir ziņot, nevis ignorēt situāciju. Savlaicīga ziņošana palīdz ātrāk pārbaudīt problēmu un novērst iespējamu konta vai datu apdraudējumu.";
        }
        if (t.includes("nepārsūtītu") || t.includes("nenosauktu kodu")) {
            return "Uzņēmumi un IT atbalsts neprasa lietotājam apstiprināt pieslēgšanos savā kontā vai nosaukt daudzfaktoru autentifikācijas kodu. Daudzfaktoru autentifikācija ir paredzēta tam, lai tikai konta īpašnieks varētu apstiprināt piekļuvi saviem datiem. Ja IT atbalstam ir nepieciešama informācija vai piekļuve, tam jānotiek caur oficiāliem un pārbaudāmiem kanāliem.";
        }
        if (t.includes("pirms informācijas nosūtīšanas")) {
            return "Labāk ir pārliecināties par pieprasījuma īstumu, nevis nosūtīt informāciju uzreiz. Tas palīdz novērst situāciju, kur sensitīvi dati nonāk pie personas, kurai tos nevajadzētu redzēt.";
        }
        if (t.includes("pārbaudītu, vai pārlūkā")) {
            return "Kad pabeidzat darbu uz publiskas vai koplietošanas ierīces, vienmēr ir jāpārbauda, vai Jūsu konti ir aizvērti un dati nav palikuši pieejami nākamajam lietotājam. Tas palīdz novērst svešas personas piekļuvi Jūsu informācijai.";
        }

        if (q.category === "Paroles") return "Šī atbilde ir saistīta ar drošu paroļu lietošanu un palīdz samazināt konta apdraudējuma risku.";
        if (q.category === "MFA") return "Šī atbilde palīdz aizsargāt kontu ar papildu pārbaudes soli.";
        if (q.category === "E-pasti") return "Šī atbilde palīdz izvērtēt e-pasta uzticamību pēc konkrētām pazīmēm.";
        if (q.category === "Pielikumi") return "Šī atbilde palīdz izvairīties no negaidītu un potenciāli bīstamu failu atvēršanas.";
        if (q.category === "Ziņošana") return "Šī atbilde palīdz savlaicīgi reaģēt uz iespējamu drošības incidentu.";
        if (q.category === "Sociālā inženierija") return "Šī atbilde palīdz nepiekrist nepārbaudītiem pieprasījumiem, kuros tiek izmantota steiga vai autoritāte.";
        if (q.category === "Drošības paradumi") return "Šī atbilde palīdz pasargāt datus koplietošanas ierīcēs.";
        return "Šī atbilde palīdz samazināt risku un pārbaudīt situāciju pirms tālākas rīcības.";
    }

    if (t.includes("līdzīgu paroli")) return "Līdzīgas paroles vairākos kontos palielina risku: ja viena parole tiek atklāta, apdraudēti var būt arī citi konti.";
    if (t.includes("viegli atcerēties") || t.includes("bez pierakstīšanas")) return "Ērti atcerama parole ne vienmēr ir droša. Ja tā nav pietiekami droša vai tiek izmantota līdzīgi citur, to var vieglāk uzminēt vai izmantot citos kontos.";
    if (t.includes("atceros galvā")) return "Paroļu glabāšana tikai atmiņā bieži noved pie vienkāršāku vai atkārtotu paroļu izmantošanas.";
    if (t.includes("papīra lapas")) return "Papīra lapa var tikt pazaudēta vai nonākt pie citas personas, īpaši ja tā tiek turēta redzamā vai viegli pieejamā vietā.";
    if (t.includes("fiziskā seifā")) return "Fizisks seifs ir drošāks par atklātu pierakstu, tomēr ikdienā tas nav tik ērts un elastīgs kā paroļu pārvaldnieks.";
    if (t.includes("ļautu īslaicīgi izmantot manu kontu")) return "Kontu nedrīkst nodot citai personai pat īslaicīgi, jo pēc tam nav skaidrs, kurš veicis darbības sistēmā.";
    if (t.includes("pārsūtītu dokumentu")) return "Dokumentu pārsūtīšana bez piekļuves tiesību pārbaudes var novest pie neatļautas informācijas izpaušanas.";
    if (t.includes("atvērtu dokumentu savā kontā")) return "Šāda rīcība ir riskanta, jo nav zināms, vai otrai personai ir tiesības redzēt šo informāciju.";
    if (t.includes("atliktu aktivizēšanu")) return "MFA atlikšana atstāj kontu mazāk aizsargātu, īpaši, ja parole vēlāk tiek atklāta vai atkārtoti izmantota.";
    if (t.includes("neaktivizētu")) return "Neaktivizējot MFA, konts paliek vairāk atkarīgs tikai no paroles drošības.";
    if (t.includes("aktivizētu, ja sistēma to pieprasa")) return "Šī rīcība nav slikta, bet tā nozīmē, ka MFA tiek izmantota tikai tad, kad sistēma to piespiež, nevis kā apzināts drošības pasākums svarīgiem kontiem.";
    if (t.includes("ignorētu pieprasījumu")) return "Negaidīts MFA pieprasījums var nozīmēt, ka kāds mēģina piekļūt kontam. To nevajadzētu tikai ignorēt.";
    if (t.includes("apstiprinātu")) return "Negaidīta MFA pieprasījuma apstiprināšana var dot uzbrucējam piekļuvi Jūsu kontam.";
    if (t.includes("pagaidītu")) return "Gaidīšana neatrisina iespējamu konta apdraudējumu. Labāk ir pārbaudīt situāciju uzreiz.";
    if (t.includes("a ir uzticams") || t.includes("b ir aizdomīgs")) return "A e-pastā redzamas viltota e-pasta pazīmes, bet B e-pasts vairāk atbilst dotajam kontekstam.";
    if (t.includes("abi e-pasti izskatās uzticami")) return "A e-pastā redzamas pazīmes, kas var liecināt par viltotu e-pastu, tāpēc abus e-pastus nevajadzētu uzskatīt par uzticamiem.";
    if (t.includes("abi e-pasti izskatās aizdomīgi")) return "B e-pasts dotajā kontekstā izskatās uzticamāks, tāpēc abus e-pastus nevajadzētu vērtēt vienādi.";
    if (t.includes("pazīstama vārda")) return "Pazīstams vārds pats par sevi negarantē drošību, jo sūtītāja vārdu var viltot vai konts var būt kompromitēts.";
    if (t.includes("korekts sveiciens") || t.includes("paraksts")) return "Sveicienu un parakstu ir viegli nokopēt vai viltot, tāpēc tie nav pietiekams uzticamības pierādījums.";
    if (t.includes("nav pielikuma") || t.includes("nav saites")) return "Arī e-pasts bez saites vai pielikuma var būt sociālās inženierijas mēģinājums, piemēram, lūgums nosūtīt informāciju.";
    if (t.includes("pieklājīgs un mierīgs")) return "Pieklājīgs tonis nenozīmē, ka ziņa ir droša. Arī krāpnieciskas ziņas var būt uzrakstītas mierīgi un korekti.";
    if (t.includes("vizuāli izskatās līdzīgs")) return "Vizuālu noformējumu var atdarināt, tāpēc ar līdzīgu izskatu vien nepietiek.";
    if (t.includes("mēstuļu mapē")) return "Tas, ka e-pasts nav mēstuļu mapē, nenozīmē, ka tas ir drošs. Filtri ne vienmēr atpazīst visus uzbrukumus.";
    if (t.includes("atvērtu pielikumu")) return "Pielikumu nedrīkst atvērt tikai tāpēc, ka tas šķiet saistīts ar darbu vai mācībām. Vispirms jāpārbauda sūtītājs un konteksts.";
    if (t.includes("lejupielādētu pielikumu")) return "Lejupielāde bez pārliecības par faila izcelsmi ir riskanta, jo fails var saturēt ļaunprātīgu saturu.";
    if (t.includes("rekins.pdf") || t.includes("foto.jpg")) return "Šie faili parasti nav tik riskanti kā arhīvi, makro faili vai izpildāmie faili, taču arī tos nevajadzētu atvērt bez konteksta.";
    if (t.includes("aizvērtu lapu") || t.includes("vēlāk parādīsies")) return "Ja dati ievadīti viltotā lapā, gaidīšana palielina risku. Parole jānomaina un jāziņo pēc iespējas ātrāk.";
    if (t.includes("tikai tad, ja vairs nevarētu pieslēgties")) return "Parole jāmaina pirms redzamu problēmu parādīšanās, jo konts jau var būt apdraudēts.";
    if (t.includes("pajautātu kādam pazīstamam")) return "Pazīstams cilvēks var palīdzēt, bet tas neaizstāj paroles nomaiņu un ziņošanu atbildīgajai personai.";
    if (t.includes("ievadītu paroli")) return "Neierasts paroles pieprasījums var būt viltots, pat ja tas parādās sistēmas lietošanas laikā.";
    if (t.includes("atliktu pārbaudi")) return "Aizdomīgu drošības situāciju atlikšana var dot uzbrucējam vairāk laika.";
    if (t.includes("aizvērtu paziņojumu")) return "Šī rīcība ir daļēji pieņemama, bet ar to nepietiek, ja paziņojums šķiet neierasts. Šādā situācijā vajadzētu arī ziņot IT atbildīgajai personai.";
    if (t.includes("nosauktu kodu")) return "Drošības kodu vai MFA apstiprinājumu nedrīkst nodot citai personai. IT atbalstam tas nav jāprasa.";
    if (t.includes("pajautātu, kāpēc kods")) return "Uzbrucējs var sniegt pārliecinošu skaidrojumu. Ar paskaidrojumu vien nepietiek, lai droši nodotu kodu vai apstiprinātu pieslēgšanos.";
    if (t.includes("atliktu sarunu")) return "Šī rīcība ir labāka nekā koda nosaukšana, bet svarīgi ir pašam sazināties ar IT atbalstu pa zināmu un pārbaudāmu kontaktu.";
    if (t.includes("nosūtītu informāciju")) return "Sensitīvu informāciju nedrīkst sūtīt tikai tāpēc, ka ziņa izskatās ticama vai nāk no pazīstama vārda.";
    if (t.includes("nosūtītu tikai daļu")) return "Daļēja informācijas nosūtīšana joprojām var būt datu noplūde, ja pieprasījums nav pārbaudīts.";
    if (t.includes("pajautātu, kādam nolūkam")) return "Papildu jautājums var palīdzēt, bet ar to nepietiek, ja pieprasījums nav pārbaudīts citā uzticamā kanālā.";
    if (t.includes("izrakstītos no izmantotajiem kontiem")) return "Izrakstīšanās ir laba rīcība, bet papildus jāpārliecinās, ka pārlūkā nav saglabāta parole vai aktīva sesija.";
    if (t.includes("aizvērtu pārlūka logu")) return "Pārlūka aizvēršana ne vienmēr izraksta lietotāju no konta. Sesija var palikt aktīva.";
    if (t.includes("atstātu kontu atvērtu")) return "Atvērts konts koplietošanas datorā ļauj nākamajam lietotājam piekļūt svešai informācijai.";

    return "Šī atbilde nav pilnībā droša, jo tā balstās uz nepietiekamu pārbaudi, pārmērīgu uzticēšanos vai atliek rīcību situācijā, kur nepieciešama ātra drošības pārbaude.";
}

define({"oj-message":{fatal:"Vakava",error:"Virhe",warning:"Varoitus",info:"Tiedot",confirmation:"Vahvistus","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Arvo ei ole odotetussa muodossa.",detail:"Syötä arvo odotetussa muodossa.","plural-separator":", ",hint:{summary:"Esimerkki: {exampleValue}",detail:"Syötä arvo tämän esimerkin mukaisessa muodossa: {exampleValue}.","detail-plural":"Syötä arvo näiden esimerkkien mukaisessa muodossa: {exampleValue}."},optionHint:{detail:"Hyväksytty arvo valinnalle {propertyName} on {propertyValueValid}.","detail-plural":"Hyväksytyt arvot valinnalle {propertyName} ovat {propertyValueValid}."},optionTypesMismatch:{summary:"Arvo valinnalle {requiredPropertyName} on pakollinen, kun valinnaksi {propertyName} on määritetty {propertyValue}."},optionTypeInvalid:{summary:"Odotetun tyyppistä arvoa ei annettu valinnalle {propertyName}."},optionOutOfRange:{summary:"Arvo {propertyValue} ei ole valinnan {propertyName} alueella."},optionValueInvalid:{summary:"Virheellinen arvo {propertyValue} määritettiin valinnalle {propertyName}."},number:{decimalFormatMismatch:{summary:"{value} ei ole odotetussa numeromuodossa."},shortLongUnsupportedParse:{summary:"short ja long eivät ole tuettuja muunto-ohjelman jäsennyksessä.",detail:"Vaihda komponentiksi readonly. readonly-kentät eivät kutsu muunto-ohjelman jäsennystoimintoa."},currencyFormatMismatch:{summary:"{value} ei ole odotetussa valuuttamuodossa."},percentFormatMismatch:{summary:"{value} ei ole odotetussa prosenttimuodossa."},invalidNumberFormat:{summary:"Annettu arvo {value} ei ole sallittu luku.",detail:"Anna sallittu luku."}},color:{invalidFormat:{summary:"Virheellinen värimuoto.",detail:"Virheellinen värimuotovalinnan määritys."},invalidSyntax:{summary:"Virheellinen värimääritys.",detail:"Värimääritys ei ole CSS3-standardin mukainen."}},datetime:{datetimeOutOfRange:{summary:"Arvo {value} ei ole kohteen {propertyName} alueella.",detail:"Syötä arvo välillä {minValue} - {maxValue}.",hour:"tunti",minute:"minuutti",second:"sekunti",millisec:"millisekunti",month:"kuukausi",day:"päivä",year:"vuosi","month name":"kuukauden nimi",weekday:"arkipäivä"},dateFormatMismatch:{summary:"{value} ei ole odotetussa päivämäärämuodossa."},invalidTimeZoneID:{summary:"Annettu virheellinen aikavyöhykkeen tunnus {timeZoneID}."},nonExistingTime:{summary:"Syöteaikaa ei ole, koska se osuu kesäaikaan siirtymisen aikaan."},missingTimeZoneData:{summary:"Aikavyöhyketiedot puuttuvat. Kutsu vaadittu ojs/ojtimezonedata, jotta voit ladata aikavyöhyketiedot."},timeFormatMismatch:{summary:"{value} ei ole odotetussa aikamuodossa."},datetimeFormatMismatch:{summary:"{value} ei ole odotetussa päivämäärä- ja aikamuodossa."},dateToWeekdayMismatch:{summary:"Päivämäärä {date} ei ole {weekday}.",detail:"Syötä päivämäärää vastaava viikonpäivä."},invalidISOString:{invalidRangeSummary:"Arvo {value} ei ole kohteen {propertyName} -kentän alueella ISO 8601 -merkkijonossa {isoStr}.",summary:"Syötetty {isoStr} ei ole sallittu ISO 8601 -merkkijono.",detail:"Syötä sallittu ISO 8601 -merkkijono."}}},"oj-validator":{length:{hint:{min:"Syötä vähintään {min} merkkiä.",max:"Syötä enintään {max} merkkiä.",inRange:"Syötä {min} - {max} merkkiä.",exact:"Syötä {length} merkkiä."},messageDetail:{tooShort:"Syötä vähintään {min} merkkiä, ei vähempää.",tooLong:"Syötä enintään {max} merkkiä, ei enempää."},messageSummary:{tooShort:"Merkkejä on liian vähän.",tooLong:"Merkkejä on liian monta."}},range:{number:{hint:{min:"Syötä luku, joka on suurempi tai yhtä suuri kuin {min}.",max:"Syötä luku, joka on pienempi tai yhtä suuri kuin {max}.",inRange:"Syötä luku välillä {min} - {max}.",exact:"Syötä luku {num}."},messageDetail:{rangeUnderflow:"Luvun on oltava suurempi tai yhtä suuri kuin {min}.",rangeOverflow:"Luvun on oltava pienempi tai yhtä suuri kuin {max}.",exact:"Luvun on oltava {num}."},messageSummary:{rangeUnderflow:"Luku on liian pieni.",rangeOverflow:"Luku on liian suuri."}},datetime:{hint:{min:"Syötä päivämäärä ja aika, joka on {min} tai sen jälkeen.",max:"Syötä päivämäärä ja aika, joka on {max} tai sitä ennen.",inRange:"Syötä päivämäärä välillä {min} - {max}."},messageDetail:{rangeUnderflow:"Päivämäärän ja ajan on oltava {min} tai sen jälkeen.",rangeOverflow:"Päivämäärän ja ajan on oltava {max} tai sitä ennen."},messageSummary:{rangeUnderflow:"Päivämäärä ja aika ovat ennen vähimmäispäivämäärää ja -aikaa.",rangeOverflow:"Päivämäärä ja aika ovat enimmäispäivämäärän ja -ajan jälkeen."}},date:{hint:{min:"Syötä päivämäärä, joka on {min} tai myöhempi.",max:"Syötä päivämäärä, joka on {max} tai varhaisempi.",inRange:"Syötä päivämäärä väliltä {min} - {max}."},messageDetail:{rangeUnderflow:"Päivämäärän on oltava {min} tai sen jälkeen.",rangeOverflow:"Päivämäärän on oltava {max} tai ennen sitä."},messageSummary:{rangeUnderflow:"Päivämäärä on ennen vähimmäispäivämäärää.",rangeOverflow:"Päivämäärä on vähimmäispäivämäärän jälkeen."}},time:{hint:{min:"Syötä aika, joka on {min} tai myöhempi.",max:"Syötä aika, joka on {max} tai varhaisempi.",inRange:"Syötä aika väliltä {min} - {max}."},messageDetail:{rangeUnderflow:"Ajan on oltava {min} tai sen jälkeen.",rangeOverflow:"Ajan on oltava {max} tai ennen sitä."},messageSummary:{rangeUnderflow:"Aika on ennen vähimmäisaikaa.",rangeOverflow:"Aika on vähimmäisajan jälkeen."}}},restriction:{date:{messageSummary:"Päivämäärä {value} on käytöstä poistettu kirjaus.",messageDetail:"Päivämäärä {value} ei saa olla käytöstä poistettu kirjaus."}},regExp:{summary:"Muoto on virheellinen.",detail:"Arvon {value} on vastattava tätä mallia: {pattern}."},required:{summary:"Arvo vaaditaan.",detail:"Syötä arvo."}},"oj-ojEditableValue":{loading:"Ladataan"},"oj-ojInputDate":{done:"Valmis",cancel:"Peruuta",prevText:"Edellinen",nextText:"Seuraava",currentText:"Tänään",weekHeader:"Viikko",tooltipCalendar:"Valitse päivämäärä.",tooltipCalendarTime:"Valitse päivämäärä ja aika.",tooltipCalendarDisabled:"Valittu päivä poissa käytöstä.",tooltipCalendarTimeDisabled:"Päivämäärän ja ajan valinta ei ole käytössä.",picker:"Valitsin",weekText:"Viikko",datePicker:"Päivämäärän valinta",inputHelp:"Avaa kalenteri painamalla ala- tai ylänuolta.",inputHelpBoth:"Avaa kalenteri painamalla ala- tai ylänuolta ja avaa ajan avattava valikko painamalla vaihtonäppäintä sekä ala- tai ylänuolta.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Peruuta",okText:"OK",currentTimeText:"Nyt",hourWheelLabel:"Tunti",minuteWheelLabel:"Minuutti",ampmWheelLabel:"AP/IP",tooltipTime:"Valitse aika.",tooltipTimeDisabled:"Valittu aika poissa käytöstä.",inputHelp:"Avaa ajan avattava valikko painamalla ala- tai ylänuolta.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Arvon on vastattava tätä mallia: {pattern}."}},"oj-ojFilmStrip":{labelAccFilmStrip:"Näytetään sivu {pageIndex}/{pageCount}",labelAccArrowNextPage:"Näytä seuraava sivu valitsemalla Seuraava",labelAccArrowPreviousPage:"Näytä edellinen sivu valitsemalla Edellinen",tipArrowNextPage:"Seuraava",tipArrowPreviousPage:"Edellinen"},"oj-ojDataGrid":{accessibleSortAscending:"{id} lajiteltu nousevaan järjestykseen",accessibleSortDescending:"{id} lajiteltu laskevaan järjestykseen",accessibleActionableMode:"Siirry toiminnalliseen tilaan.",accessibleNavigationMode:"Siirry navigointitilaan. Siirry muokkaus- tai toiminnalliseen tilaan painamalla F2-näppäintä.",accessibleEditableMode:"Siirry muokkaustilaan. Siirry tietoruudukon ulkopuolelle painamalla ESC-näppäintä.",accessibleSummaryExact:"Tämä on tietoruudukko, jossa on {rownum} riviä ja {colnum} saraketta",accessibleSummaryEstimate:"Tämä on tietoruudukko, jonka rivien ja sarakkeiden määrää ei tiedetä",accessibleSummaryExpanded:"{num} riviä on laajennettu",accessibleRowExpanded:"Rivi laajennettu",accessibleRowCollapsed:"Rivi tiivistetty",accessibleRowSelected:"Rivi {row} valittu",accessibleColumnSelected:"Sarake {column} valittu",accessibleStateSelected:"valittu",accessibleMultiCellSelected:"{num} solua valittu",accessibleColumnSpanContext:"{extent} leveä",accessibleRowSpanContext:"{extent} korkea",accessibleRowContext:"Rivi {index}",accessibleColumnContext:"Sarake {index}",accessibleRowHeaderContext:"Riviotsikko {index}",accessibleColumnHeaderContext:"Sarakeotsikko {index}",accessibleRowEndHeaderContext:"Rivinpäätösotsikko {index}",accessibleColumnEndHeaderContext:"Sarakkeenpäätösotsikko {index}",accessibleRowHeaderLabelContext:"Rivin otsikko {level}",accessibleColumnHeaderLabelContext:"Sarakkeen otsikko {level}",accessibleRowEndHeaderLabelContext:"Rivin päätösotsikko {level}",accessibleColumnEndHeaderLabelContext:"Sarakkeen päätösotsikko {level}",accessibleLevelContext:"Taso {level}",accessibleRangeSelectModeOn:"Lisää valittu soluväli -tila käytössä.",accessibleRangeSelectModeOff:"Lisää valittu soluväli -tila poissa käytöstä.",accessibleFirstRow:"Olet ensimmäisellä rivillä.",accessibleLastRow:"Olet viimeisellä rivillä.",accessibleFirstColumn:"Olet ensimmäisessä sarakkeessa",accessibleLastColumn:"Olet viimeisessä sarakkeessa.",accessibleSelectionAffordanceTop:"Ylävalintakahva.",accessibleSelectionAffordanceBottom:"Alavalintakahva.",msgFetchingData:"Haetaan tietoja...",msgNoData:"Ei sisältöä",labelResize:"Muuta kokoa",labelResizeWidth:"Muuta leveyttä",labelResizeHeight:"Muuta korkeutta",labelSortRow:"Lajittele rivi",labelSortRowAsc:"Lajittele rivi nousevaan järjestykseen",labelSortRowDsc:"Lajittele rivi laskevaan järjestykseen",labelSortCol:"Lajittele sarake",labelSortColAsc:"Lajittele sarake nousevaan järjestykseen",labelSortColDsc:"Lajittele sarake laskevaan järjestykseen",labelCut:"Leikkaa",labelPaste:"Liitä",labelEnableNonContiguous:"Ota käyttöön epäjatkuva valinta",labelDisableNonContiguous:"Poista käytöstä epäjatkuva valinta",labelResizeDialogSubmit:"OK",labelResizeDialogCancel:"Peruuta"},"oj-ojRowExpander":{accessibleLevelDescription:"Taso {level}",accessibleRowDescription:"Taso {level}, rivi {num}/{total}",accessibleRowExpanded:"Rivi laajennettu",accessibleRowCollapsed:"Rivi tiivistetty",accessibleStateExpanded:"laajennettu",accessibleStateCollapsed:"tiivistetty"},"oj-ojListView":{msgFetchingData:"Haetaan tietoja...",msgNoData:"Ei sisältöä.",msgItemsAppended:"{count} kohdetta liitetty loppuun.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|Å|Ä|Ö",accessibleReorderTouchInstructionText:"Kaksoisnapauta ja pidä. Odota äänimerkkiä ja järjestä sitten uudelleen vetämällä.",accessibleReorderBeforeItem:"Ennen {item}",accessibleReorderAfterItem:"Jälkeen {item}",accessibleReorderInsideItem:"Sisään {item}",accessibleNavigateSkipItems:"Ohitetaan {numSkip} alkiota",labelCut:"Leikkaa",labelCopy:"Kopioi",labelPaste:"Liitä",labelPasteBefore:"Liitä eteen",labelPasteAfter:"Liitä jälkeen"},"oj-_ojLabel":{tooltipHelp:"Ohje",tooltipRequired:"Pakollinen"},"oj-ojLabel":{tooltipHelp:"Ohje",tooltipRequired:"Pakollinen"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Vähennys",tooltipIncrement:"Lisäys"},"oj-ojTable":{accessibleSortAscending:"{id} lajiteltu nousevaan järjestykseen",accessibleSortDescending:"{id} lajiteltu laskevaan järjestykseen",labelAccSelectionAffordanceTop:"Ylävalintakahva",labelAccSelectionAffordanceBottom:"Alavalintakahva",labelEnableNonContiguousSelection:"Ota käyttöön epäjatkuva valinta",labelDisableNonContiguousSelection:"Poista käytöstä epäjatkuva valinta",labelResize:"Muuta kokoa",labelResizePopupSubmit:"OK",labelResizePopupCancel:"Peruuta",labelResizePopupSpinner:"Muuta sarakkeen kokoa",labelSelectRow:"Valitse rivi",labelEditRow:"Muokkaa riviä",labelSelectAndEditRow:"Valitse rivi ja muokkaa sitä",labelSelectColumn:"Valitse sarake",labelSort:"Lajittele",labelSortAsc:"Nouseva järjestys",labelSortDsc:"Laskeva järjestys",msgFetchingData:"Haetaan tietoja...",msgNoData:"Näytettäviä tietoja ei ole.",msgInitializing:"Alustetaan...",msgColumnResizeWidthValidation:"Leveysarvon on oltava kokonaisluku.",msgScrollPolicyMaxCountSummary:"Taulun vierityksen rivien enimmäismäärä ylitetty.",msgScrollPolicyMaxCountDetail:"Lataa uudelleen pienemmällä tietojoukolla.",msgStatusSortAscending:"{0} lajiteltu nousevaan järjestykseen.",msgStatusSortDescending:"{0} lajiteltu laskevaan järjestykseen."},"oj-ojTabs":{labelCut:"Leikkaa",labelPasteBefore:"Liitä eteen",labelPasteAfter:"Liitä jälkeen",labelRemove:"Poista",labelReorder:"Järjestä uudelleen",removeCueText:"Poistettava"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Hakukenttä",noMatchesFound:"Vastineita ei löydy",oneMatchesFound:"Yksi vastaavuus löydettiin",moreMatchesFound:"{num} vastineita löytyi",filterFurther:"Lisää tuloksia saatavilla. Suodata lisää."},"oj-ojSwitch":{SwitchON:"Käytössä",SwitchOFF:"Ei käytössä"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Vastineita ei löydy",oneMatchesFound:"Yksi vastaavuus löydettiin",moreMatchesFound:"{num} vastineita löytyi",filterFurther:"Lisää tuloksia saatavilla. Suodata lisää."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Vastineita ei löydy",oneMatchFound:"Yksi vastaavuus löydettiin",multipleMatchesFound:"{num} vastineita löytyi",nOrMoreMatchesFound:"{num} tai enemmän vastineita löytyi",cancel:"Peruuta",labelAccOpenDropdown:"laajenna",noResultsLine1:"Ei tuloksia",noResultsLine2:"Hakua vastaavia kohteita ei löydy."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Vastineita ei löydy",oneMatchesFound:"Yksi vastaavuus löydettiin",moreMatchesFound:"{num} vastineita löytyi"},"oj-ojTree":{stateLoading:"Ladataan...",labelNewNode:"Uusi solmu",labelMultiSelection:"Useita valintoja",labelEdit:"Muokkaa",labelCreate:"Luo",labelCut:"Leikkaa",labelCopy:"Kopioi",labelPaste:"Liitä",labelPasteAfter:"Liitä jälkeen",labelPasteBefore:"Liitä eteen",labelRemove:"Poista",labelRename:"Nimeä uudelleen",labelNoData:"Ei tietoja"},"oj-ojPagingControl":{labelAccPaging:"Sivutus",labelAccPageNumber:"Sivun {pageNum} sisältö ladattu",labelAccNavFirstPage:"Ensimmäinen sivu",labelAccNavLastPage:"Viimeinen sivu",labelAccNavNextPage:"Seuraava sivu",labelAccNavPreviousPage:"Edellinen sivu",labelAccNavPage:"Sivu",labelLoadMore:"Näytä lisää...",labelLoadMoreMaxRows:"Saavutettu {maxRows} riviä enimmäisrajasta",labelNavInputPage:"Sivu",labelNavInputPageMax:"/{pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} / {pageMax} kohdetta",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} vähintään {pageMax} kohteesta",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} noin {pageMax} kohteesta",msgItemRangeNoTotal:"{pageFrom}-{pageTo} kohdetta",fullMsgItem:"{pageTo}/{pageMax} kohdetta",fullMsgItemAtLeast:"{pageTo} vähintään {pageMax} kohteesta",fullMsgItemApprox:"{pageTo} noin {pageMax} kohteesta",msgItemNoTotal:"{pageTo} kohdetta",msgItemRangeCurrent:"{pageFrom} - {pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"/",msgItemRangeOfAtLeast:"vähintään",msgItemRangeOfApprox:"n.",msgItemRangeItems:"alkiota",tipNavInputPage:"Sivulle",tipNavPageLink:"Siirry sivulle {pageNum}",tipNavNextPage:"Seuraava",tipNavPreviousPage:"Edellinen",tipNavFirstPage:"Ensimmäinen",tipNavLastPage:"Viimeinen",pageInvalid:{summary:"Syötetty sivun arvo on virheellinen.",detail:"Syötä nollaa suurempi arvo."},maxPageLinksInvalid:{summary:"Kohteen maxPageLinks arvo on virheellinen.",detail:"Syötä neljää suurempi arvo."}},"oj-ojMasonryLayout":{labelCut:"Leikkaa",labelPasteBefore:"Liitä eteen",labelPasteAfter:"Liitä jälkeen"},"oj-panel":{labelAccButtonExpand:"Laajenna",labelAccButtonCollapse:"Tiivistä",labelAccButtonRemove:"Poista",labelAccFlipForward:"Käännä eteenpäin",labelAccFlipBack:"Käännä takaisin",tipDragToReorder:"Järjestä uudelleen vetämällä",labelAccDragToReorder:"Järjestä uudelleen vetämällä, kontekstivalikko käytettävissä"},"oj-ojChart":{labelDefaultGroupName:"Ryhmä {0}",labelSeries:"Sarja",labelGroup:"Ryhmä",labelDate:"Päivämäärä",labelValue:"Arvo",labelTargetValue:"Kohde",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Prosenttiosuus",labelLow:"Pieni",labelHigh:"Suuri",labelOpen:"Avaa",labelClose:"Sulje",labelVolume:"Määrä",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Vähintään",labelMax:"Enintään",labelOther:"Muu",tooltipPan:"Panoroi",tooltipSelect:"Alueen valinta",tooltipZoom:"Zoomausvalinta",componentName:"Kaavio"},"oj-dvtBaseGauge":{componentName:"Mittari"},"oj-ojDiagram":{promotedLink:"{0} linkki",promotedLinks:"{0} linkkiä",promotedLinkAriaDesc:"Epäsuora",componentName:"Kaavio"},"oj-ojGantt":{componentName:"Gantt-kaavio",accessibleDurationDays:"{0} päivää",accessibleDurationHours:"{0} tuntia",accessibleTaskInfo:"Aloitusaika on {0}, lopetusaika on {1}, kesto on {2}",accessibleMilestoneInfo:"Aika on {0}",accessibleRowInfo:"Rivi {0}",accessibleTaskTypeMilestone:"Virstanpylväs",accessibleTaskTypeSummary:"Yhteenveto",accessiblePredecessorInfo:"{0} edeltäjää",accessibleSuccessorInfo:"{0} seuraajaa",accessibleDependencyInfo:"Riippuvuustyyppi {0}, muodostaa yhteyden {1} - {2}",startStartDependencyAriaDesc:"alusta alkuun",startFinishDependencyAriaDesc:"alusta loppuun",finishStartDependencyAriaDesc:"lopusta alkuun",finishFinishDependencyAriaDesc:"lopusta loppuun",tooltipZoomIn:"Lähennä",tooltipZoomOut:"Loitonna",labelLevel:"Taso",labelRow:"Rivi",labelStart:"Alku",labelEnd:"Loppu",labelDate:"Päivämäärä",labelBaselineStart:"Alkuperäinen aloitus",labelBaselineEnd:"Alkuperäinen lopetus",labelBaselineDate:"Alkuperäinen päivämäärä",labelLabel:"Nimi",labelProgress:"Edistyminen",labelMoveBy:"Siirtoperuste",labelResizeBy:"Muuta kokoa",taskMoveInitiated:"Tehtävän siirto käynnistetty",taskResizeEndInitiated:"Tehtävän koonmuutoksen lopetus käynnistetty",taskResizeStartInitiated:"Tehtävän koonmuutoksen aloitus käynnistetty",taskMoveSelectionInfo:"{0} muuta valittu",taskResizeSelectionInfo:"{0} muuta valittu",taskMoveInitiatedInstruction:"Siirrä nuolinäppäimillä",taskResizeInitiatedInstruction:"Muuta kokoa nuolinäppäimillä",taskMoveFinalized:"Tehtävä siirretty",taskResizeFinalized:"Tehtävän koko muutettu",taskMoveCancelled:"Tehtävän siirto peruutettu",taskResizeCancelled:"Tehtävän koonmuutos peruutettu",taskResizeStartHandle:"Tehtävän koonmuutoksen aloituksen kahva",taskResizeEndHandle:"Tehtävän koonmuutoksen lopetuksen kahva"},"oj-ojLegend":{componentName:"Selite",tooltipExpand:"Laajenna",tooltipCollapse:"Tiivistä"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Muu",labelGroup:"Ryhmä",labelSize:"Koko",labelAdditionalData:"Lisätiedot",componentName:"{0} ruutu"},"oj-ojPictoChart":{componentName:"Kuvakaavio"},"oj-ojSparkChart":{componentName:"Kaavio"},"oj-ojSunburst":{labelColor:"Väri",labelSize:"Koko",tooltipExpand:"Laajenna",tooltipCollapse:"Tiivistä",componentName:"Aurinko"},"oj-ojTagCloud":{componentName:"Tunnistepilvi"},"oj-ojThematicMap":{componentName:"Teemakartta",areasRegion:"Alueet",linksRegion:"Linkit",markersRegion:"Merkit"},"oj-ojTimeAxis":{componentName:"Aika-akseli"},"oj-ojTimeline":{componentName:"Aikajana",accessibleItemDesc:"Kuvaus on {0}.",accessibleItemEnd:"Päättymisaika on {0}.",accessibleItemStart:"Aloitusaika on {0}.",accessibleItemTitle:"Otsikko on {0}.",labelSeries:"Sarja",tooltipZoomIn:"Lähennä",tooltipZoomOut:"Loitonna",labelStart:"Alku",labelEnd:"Loppu",labelDate:"Päivämäärä",labelTitle:"Otsikko",labelDescription:"Kuvaus"},"oj-ojTreemap":{labelColor:"Väri",labelSize:"Koko",tooltipIsolate:"Eristä",tooltipRestore:"Palauta",componentName:"Puukartta"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"tuhat",labelScalingSuffixMillion:"milj.",labelScalingSuffixBillion:"mrd.",labelScalingSuffixTrillion:"bilj.",labelScalingSuffixQuadrillion:"kvadr.",labelInvalidData:"Virheelliset tiedot",labelNoData:"Ei näytettäviä tietoja",labelClearSelection:"Tyhjennä valinnat",labelDataVisualization:"Tietojen visualisointi",stateSelected:"Valittu",stateUnselected:"Valitsematon",stateMaximized:"Suurennettu",stateMinimized:"Pienennetty",stateExpanded:"Laajennettu",stateCollapsed:"Tiivistetty",stateIsolated:"Eristetty",stateHidden:"Piilotettu",stateVisible:"Näkyvä",stateDrillable:"Siirryttävä",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0}/{1}"},"oj-ojNavigationList":{defaultRootLabel:"Navigointilista",hierMenuBtnLabel:"Hierarkkinen valikkopainike",selectedLabel:"valittu",previousIcon:"Edellinen",msgFetchingData:"Haetaan tietoja...",msgNoData:"Ei sisältöä.",overflowItemLabel:"Lisää",accessibleReorderTouchInstructionText:"Kaksoisnapauta ja pidä. Odota äänimerkkiä ja järjestä sitten uudelleen vetämällä.",accessibleReorderBeforeItem:"Ennen {item}",accessibleReorderAfterItem:"Jälkeen {item}",labelCut:"Leikkaa",labelPasteBefore:"Liitä eteen",labelPasteAfter:"Liitä jälkeen",labelRemove:"Poista",removeCueText:"Poistettava"},"oj-ojSlider":{noValue:"ojSlider ei sisällä arvoa",maxMin:"Enimmäisarvon on oltava pienempi tai yhtäsuuri kuin vähimmäisarvon",valueRange:"Arvon on oltava enintään-vähintään-alueella",optionNum:"Valinta {option} ei ole luku",invalidStep:"Virheellinen vaihe. Vaiheen on oltava yli 0"},"oj-ojDialog":{labelCloseIcon:"Sulje"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Siirrytään kohovalikkoon. F6-näppäimellä voit vaihdella kohovalikon ja siihen liittyvän ohjaimen välillä.",ariaLiveRegionInitialFocusNone:"Kohovalikko avattu. F6-näppäimellä voit vaihdella kohovalikon ja siihen liittyvän ohjaimen välillä.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Siirrytään kohovalikkoon. Voit sulkea kohovalikon siirtymällä sen viimeisimpään linkkiin.",ariaLiveRegionInitialFocusNoneTouch:"Kohovalikko avattu. Kohdista kohovalikossa siirtymällä seuraavaan linkkiin.",ariaFocusSkipLink:"Siirry avoimeen kohovalikkoon kaksoisnapauttamalla.",ariaCloseSkipLink:"Sulje avoin kohovalikko kaksoisnapauttamalla."},"oj-ojRefresher":{ariaRefreshLink:"Päivitä sisältö ottamalla käyttöön linkki",ariaRefreshingLink:"Päivitetään sisältöä",ariaRefreshCompleteLink:"Päivitys valmis"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Näytä alkutoimet",ariaShowEndActionsDescription:"Näytä lopputoimet",ariaHideActionsDescription:"Piilota toimet"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|Å|Ä|Ö",indexerOthers:"#",ariaDisabledLabel:"Ei vastaavaa ryhmän otsikkoa",ariaOthersLabel:"luku",ariaInBetweenText:"Välillä {first} ja {second}",ariaKeyboardInstructionText:"Valitse arvo painamalla Enter-näppäintä.",ariaTouchInstructionText:"Siirry eletilaan kaksoisnapauttamalla ja painamalla ja säädä sitten arvoa vetämällä ylös- tai alaspäin."},"oj-ojMenu":{labelCancel:"Peruuta",ariaFocusSkipLink:"Kohdistus on valikossa. Siirrä kohdistus ensimmäiseen valikkovalintaan kaksoisnapauttamalla tai pyyhkäisemällä."},"oj-ojColorSpectrum":{labelHue:"Sävy",labelOpacity:"Läpikuultavuus",labelSatLum:"Kylläisyys/kirkkaus",labelThumbDesc:"Värispektrin nelisuuntainen liukusäädin."},"oj-ojColorPalette":{labelNone:"Ei mitään"},"oj-ojColorPicker":{labelSwatches:"Värimallit",labelCustomColors:"Räätälöidyt värit",labelPrevColor:"Edellinen väri",labelDefColor:"Oletusväri",labelDelete:"Poista",labelDeleteQ:"Poistetaanko?",labelAdd:"Lisää",labelAddColor:"Lisää väri",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Sävy",labelSliderSaturation:"Kylläisyys",labelSliderSat:"Kyl",labelSliderLightness:"Vaaleus",labelSliderLum:"Kirkkaus",labelSliderAlpha:"Alfa",labelOpacity:"Läpikuultavuus",labelSliderRed:"Punainen",labelSliderGreen:"Vihreä",labelSliderBlue:"Sininen"},"oj-ojFilePicker":{dropzoneText:"Lataa tiedostot napsauttamalla tai pudottamalla ne tähän",singleFileUploadError:"Lataa yksi tiedosto kerrallaan.",singleFileTypeUploadError:"Tyypin {fileType} tiedostoja ei voi ladata.",multipleFileTypeUploadError:"Seuraavien tyyppien tiedostoja ei voi ladata: {fileTypes}.",dropzonePrimaryText:"Vedä ja pudota",secondaryDropzoneText:"tiedostosi tähän tai selaa",secondaryDropzoneTextMultiple:"tiedostosi tähän tai selaa",unknownFileType:"tuntematon"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Käynnissä"},"oj-ojMessage":{labelCloseIcon:"Sulje",categories:{error:"Virhe",warning:"Varoitus",info:"Tiedot",confirmation:"Vahvistus"}},"oj-ojMessages":{labelLandmark:"Viestit",ariaLiveRegion:{navigationFromKeyboard:"Siirrytään viestialueelle. Siirry takaisin kohdistettuun elementtiin F6-näppäimellä.",navigationToTouch:"Viestialueella on uusia viestejä. Siirry viestien maamerkkiin VoiceOver-roottorilla.",navigationToKeyboard:"Viestialueella on uusia viestejä. Siirry viimeisimmälle viestialueelle F6-näppäimellä.",newMessage:"Viestiluokka {category}. {summary}."}}});
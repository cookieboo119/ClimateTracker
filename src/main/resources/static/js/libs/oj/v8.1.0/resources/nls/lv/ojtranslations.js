define({"oj-message":{fatal:"Fatāla",error:"Kļūda",warning:"Brīdinājums",info:"Informācija",confirmation:"Apstiprinājums","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Vērtība nav paredzētajā formātā.",detail:"Ievadiet vērtību paredzētajā formātā.","plural-separator":", ",hint:{summary:"Piemērs: {exampleValue}",detail:"Ievadiet vērtību tādā pašā formātā kā šajā piemērā: '{exampleValue}'.","detail-plural":"Ievadiet vērtību tādā pašā formātā kā šajos piemēros: '{exampleValue}'."},optionHint:{detail:"Opcijas '{propertyName}' pieņemamā vērtība ir '{propertyValueValid}'.","detail-plural":"Opcijas '{propertyName}' pieņemamās vērtības ir '{propertyValueValid}'."},optionTypesMismatch:{summary:"Opcijas '{requiredPropertyName}' vērtība ir obligāta, ja opcija '{propertyName}' ir iestatīta kā '{propertyValue}'."},optionTypeInvalid:{summary:"Opcijas '{propertyName}' vērtība netika norādīta ar paredzēto tipu."},optionOutOfRange:{summary:"Opcijas '{propertyName}' vērtība {propertyValue} ir ārpus diapazona."},optionValueInvalid:{summary:"Opcijai '{propertyName}' tika norādīta nederīga vērtība '{propertyValue}'."},number:{decimalFormatMismatch:{summary:"'{value}' nav paredzētajā skaitļu formātā."},shortLongUnsupportedParse:{summary:"'short' un 'long' pārveidotāja parsēšanai netiek atbalstīti.",detail:"Nomainiet komponentu kā tikai lasāmu. Tikai lasāmie lauki neizsauc pārveidotāja parsēšanas funkciju."},currencyFormatMismatch:{summary:"'{value}' nav paredzētajā valūtas formātā."},percentFormatMismatch:{summary:"'{value}' nav paredzētajā procentu formātā."},invalidNumberFormat:{summary:"Norādītā vērtība '{value}' nav derīgs skaitlis.",detail:"Lūdzu, norādiet derīgu skaitli."}},color:{invalidFormat:{summary:"Nederīgs krāsas formāts.",detail:"Nederīga krāsas formāta opcijas specifikācija."},invalidSyntax:{summary:"Nederīga krāsas specifikācija.",detail:"Krāsas specifikācija neatbilst standartam CSS3."}},datetime:{datetimeOutOfRange:{summary:"Rekvizīta '{propertyName}' vērtība '{value}' ir ārpus diapazona.",detail:"Ievadiet vērtību no '{minValue}' līdz '{maxValue}'.",hour:"stunda",minute:"minūte",second:"sekunde",millisec:"milisekunde",month:"mēnesis",day:"diena",year:"gads","month name":"mēneša nosaukums",weekday:"darbdiena"},dateFormatMismatch:{summary:"'{value}' nav paredzētajā datuma formātā."},invalidTimeZoneID:{summary:"Norādīts nederīgs laika joslas ID {timeZoneID}."},nonExistingTime:{summary:"Šis ievades laiks nepastāv, jo tas iekrīt pārejā uz vasaras laiku."},missingTimeZoneData:{summary:"Trūkst laika joslas datu. Lai ielādētu laika joslas datus, izsauciet obligāto 'ojs/ojtimezonedata'."},timeFormatMismatch:{summary:"'{value}' nav paredzētajā laika formātā."},datetimeFormatMismatch:{summary:"'{value}' nav paredzētajā datuma un laika formātā."},dateToWeekdayMismatch:{summary:"Diena '{date}' neiekrīt '{weekday}'.",detail:"Ievadiet nedēļas dienu, kas atbilst datumam."},invalidISOString:{invalidRangeSummary:"Vērtība '{value}' atrodas ārpus diapazona, kas laukam '{propertyName}' paredzēts ISO 8601 virknē '{isoStr}'.",summary:"Norādītā '{isoStr}' nav derīga ISO 8601 virkne.",detail:"Lūdzu, norādiet derīgu ISO 8601 virkni."}}},"oj-validator":{length:{hint:{min:"Ievadiet {min} vai vairāk rakstzīmju.",max:"Ievadiet {max} vai mazāk rakstzīmju.",inRange:"Ievadiet {min} vai vairāk rakstzīmes; maksimālā vērtība ir {max}.",exact:"Ievadiet {length} rakstzīmes."},messageDetail:{tooShort:"Ievadiet ne mazāk kā {min} rakstzīmes.",tooLong:"Ievadiet ne vairāk kā {max} rakstzīmes."},messageSummary:{tooShort:"Ir pārāk maz rakstzīmju.",tooLong:"Ir pārāk daudz rakstzīmju."}},range:{number:{hint:{min:"Ievadiet skaitli, kas ir lielāks par vai vienāds ar {min}.",max:"Ievadiet skaitli, kas ir mazāks par vai vienāds ar {max}.",inRange:"Ievadiet skaitli no {min} līdz {max}.",exact:"Ievadiet skaitli {num}."},messageDetail:{rangeUnderflow:"Skaitlim ir jābūt lielākam par vai vienādam ar {min}.",rangeOverflow:"Skaitlim ir jābūt mazākam par vai vienādam ar {max}.",exact:"Skaitlim ir jābūt {num}."},messageSummary:{rangeUnderflow:"Skaitlis ir pārāk mazs.",rangeOverflow:"Skaitlis ir pārāk liels."}},datetime:{hint:{min:"Ievadiet datumu un laiku, kas ir {min} vai pēc tam.",max:"Ievadiet datumu un laiku, kas ir {max} vai pirms tam.",inRange:"ievadiet datumu un laiku, kas ir no {min} līdz {max}."},messageDetail:{rangeUnderflow:"Datumam un laikam ir jābūt {min} vai vēlāk.",rangeOverflow:"Datumam un laikam ir jābūt {max} vai agrāk."},messageSummary:{rangeUnderflow:"Datums un laiks ir agrāk nekā minimālais datums un laiks.",rangeOverflow:"Datums un laiks ir vēlāk nekā maksimālais datums un laiks."}},date:{hint:{min:"Ievadiet datumu, kas ir {min} vai pēc tam.",max:"Ievadiet datumu, kas ir {max} vai pirms tam.",inRange:"Ievadiet datumu no {min} līdz {max}."},messageDetail:{rangeUnderflow:"Datumam ir jābūt {min} vai vēlāk.",rangeOverflow:"Datumam ir jābūt {max} vai agrāk."},messageSummary:{rangeUnderflow:"Datums ir agrāk nekā minimālais datums.",rangeOverflow:"Datums ir vēlāk nekā maksimālais datums."}},time:{hint:{min:"Ievadiet laiku, kas ir {min} vai vēlāk.",max:"Ievadiet laiku, kas ir {max} vai agrāk.",inRange:"Ievadiet laiku no {min} līdz {max}."},messageDetail:{rangeUnderflow:"Laikam ir jābūt {min} vai vēlāk.",rangeOverflow:"Laikam ir jābūt {max} vai agrāk."},messageSummary:{rangeUnderflow:"Laiks ir agrāk nekā minimālais laiks.",rangeOverflow:"Laiks ir vēlāk nekā maksimālais laiks."}}},restriction:{date:{messageSummary:"Datums {value} ir no atspējota ieraksta.",messageDetail:"Datums {value} nedrīkst būt no atspējota ieraksta."}},regExp:{summary:"Formāts ir nepareizs.",detail:"Vērtībai '{value}' ir jāatbilst šim modelim: '{pattern}'."},required:{summary:"Vērtība ir obligāta.",detail:"Jums ir jāievada vērtība."}},"oj-ojEditableValue":{loading:"Notiek ielāde"},"oj-ojInputDate":{done:"Gatavs",cancel:"Atcelt",prevText:"Atpakaļ",nextText:"Tālāk",currentText:"Šodien",weekHeader:"Ned.",tooltipCalendar:"Atlasīt datumu.",tooltipCalendarTime:"Datuma atlases laiks.",tooltipCalendarDisabled:"Datuma atlase ir atspējota.",tooltipCalendarTimeDisabled:"Datuma atlases laiks ir atspējots.",picker:"Atlasītājs",weekText:"Nedēļa",datePicker:"Datuma atlasītājs",inputHelp:"Nospiediet taustiņu Uz leju vai Uz augšu, lai piekļūtu kalendāram.",inputHelpBoth:"Nospiediet taustiņu Uz leju vai Uz augšu, lai piekļūtu kalendāram, un Shift + Uz leju vai Shift + Uz augšu, lai piekļūtu laika nolaižamajam sarakstam.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Atcelt",okText:"Labi",currentTimeText:"Tūlīt",hourWheelLabel:"Stunda",minuteWheelLabel:"Minūte",ampmWheelLabel:"AMPM",tooltipTime:"Atlasīt laiku.",tooltipTimeDisabled:"Laika atlase ir atspējota.",inputHelp:"Nospiediet taustiņu Uz leju vai Uz augšu, lai piekļūtu laika nolaižamajam sarakstam.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Vērtībai ir jāatbilst šim modelim: '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"Tiek rādīta {pageIndex}. lapa no {pageCount}",labelAccArrowNextPage:"Atlasiet Tālāk, lai parādītu nākamo lapu",labelAccArrowPreviousPage:"Atlasiet Atpakaļ, lai parādītu iepriekšējo lapu",tipArrowNextPage:"Tālāk",tipArrowPreviousPage:"Atpakaļ"},"oj-ojDataGrid":{accessibleSortAscending:"{id} kārtots augošā secībā",accessibleSortDescending:"{id} kārtots dilstošā secībā",accessibleActionableMode:"Ieejiet režīmā ar iespējamu darbību.",accessibleNavigationMode:"Ieejiet navigācijas režīmā, nospiediet F2, lai ieietu rediģēšanas režīmā vai režīmā ar iespējamu darbību.",accessibleEditableMode:"Ieejiet rediģēšanas režīmā, nospiediet Esc, lai naviģētu ārpus datu režģa.",accessibleSummaryExact:"Šis ir datu režģis ar {rownum} rindām un {colnum} kolonnām",accessibleSummaryEstimate:"Šis ir datu režģis ar nezināmu rindu un kolonnu skaitu",accessibleSummaryExpanded:"Pašlaik ir izvērstas {num} rindas",accessibleRowExpanded:"Rinda ir izvērsta",accessibleRowCollapsed:"Rinda ir sakļauta",accessibleRowSelected:"Rinda {row} ir atlasīta",accessibleColumnSelected:"Kolonna {column} ir atlasīta",accessibleStateSelected:"atlasīts",accessibleMultiCellSelected:"{num} šūnas ir atlasītas",accessibleColumnSpanContext:"{extent} plats",accessibleRowSpanContext:"{extent} augsts",accessibleRowContext:"Rinda {index}",accessibleColumnContext:"Kolonna {index}",accessibleRowHeaderContext:"Rindas galvene {index}",accessibleColumnHeaderContext:"Kolonnas galvene {index}",accessibleRowEndHeaderContext:"Rindas beigu galvene {index}",accessibleColumnEndHeaderContext:"Kolonnas beigu galvene {index}",accessibleRowHeaderLabelContext:"Rindas galvenes etiķete {level}",accessibleColumnHeaderLabelContext:"Kolonnas galvenes etiķete {level}",accessibleRowEndHeaderLabelContext:"Rindas beigu galvenes etiķete {level}",accessibleColumnEndHeaderLabelContext:"Kolonnas beigu galvenes etiķete {level}",accessibleLevelContext:"Līmenis {level}",accessibleRangeSelectModeOn:'Režīms "Pievienot atlasīto šūnu diapazonu" ir ieslēgts.',accessibleRangeSelectModeOff:'Režīms "Pievienot atlasīto šūnu diapazonu" ir izslēgts.',accessibleFirstRow:"Esat sasniedzis pirmo rindu.",accessibleLastRow:"Esat sasniedzis pēdējo rindu.",accessibleFirstColumn:"Esat sasniedzis pirmo kolonnu.",accessibleLastColumn:"Esat sasniedzis pēdējo kolonnu.",accessibleSelectionAffordanceTop:"Augšējais atlases turis.",accessibleSelectionAffordanceBottom:"Apakšējais atlases turis.",msgFetchingData:"Notiek datu ienese...",msgNoData:"Nav neviena parādāma vienuma. ",labelResize:"Mainīt izmērus",labelResizeWidth:"Mainīt platumu",labelResizeHeight:"Mainīt augstumu",labelSortRow:"Kārtot rindas",labelSortRowAsc:"Kārtot rindas augošā secībā",labelSortRowDsc:"Kārtot rindas dilstošā secībā",labelSortCol:"Kārtot kolonnas",labelSortColAsc:"Kārtot kolonnas augošā secībā",labelSortColDsc:"Kārtot kolonnas dilstošā secībā",labelCut:"Izgriezt",labelPaste:"Ielīmēt",labelEnableNonContiguous:"Iespējot atlasi ar pārtraukumiem",labelDisableNonContiguous:"Atspējot atlasi ar pārtraukumiem",labelResizeDialogSubmit:"Labi",labelResizeDialogCancel:"Atcelt"},"oj-ojRowExpander":{accessibleLevelDescription:"Līmenis {level}",accessibleRowDescription:"Līmenis {level}, {num}. rinda no {total}",accessibleRowExpanded:"Rinda ir izvērsta",accessibleRowCollapsed:"Rinda ir sakļauta",accessibleStateExpanded:"izvērsts",accessibleStateCollapsed:"sakļauts"},"oj-ojListView":{msgFetchingData:"Notiek datu ienese...",msgNoData:"Nav neviena parādāma vienuma. ",msgItemsAppended:"Beigās pievienoti {count} vienumi.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Divreiz pieskarieties un turiet. Sagaidiet signālu un tad velciet, lai pārkārtotu.",accessibleReorderBeforeItem:"Pirms {item}",accessibleReorderAfterItem:"Pēc {item}",accessibleReorderInsideItem:"Šeit: {item}",accessibleNavigateSkipItems:"Izlaiž {numSkip} pozīcijas",labelCut:"Izgriezt",labelCopy:"Kopēt",labelPaste:"Ielīmēt",labelPasteBefore:"Ielīmēt pirms",labelPasteAfter:"Ielīmēt pēc"},"oj-_ojLabel":{tooltipHelp:"Palīdzība",tooltipRequired:"Obligāts"},"oj-ojLabel":{tooltipHelp:"Palīdzība",tooltipRequired:"Obligāts"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Samazinājums",tooltipIncrement:"Palielinājums"},"oj-ojTable":{accessibleSortAscending:"{id} kārtots augošā secībā",accessibleSortDescending:"{id} kārtots dilstošā secībā",labelAccSelectionAffordanceTop:"Augšējais atlases turis",labelAccSelectionAffordanceBottom:"Apakšējais atlases turis",labelEnableNonContiguousSelection:"Iespējot atlasi ar pārtraukumiem",labelDisableNonContiguousSelection:"Atspējot atlasi ar pārtraukumiem",labelResize:"Mainīt izmērus",labelResizePopupSubmit:"Labi",labelResizePopupCancel:"Atcelt",labelResizePopupSpinner:"Mainīt kolonnas izmērus",labelSelectRow:"Atlasīt rindu",labelEditRow:"Rediģēt rindu",labelSelectAndEditRow:"Atlasīt un rediģēt rindu",labelSelectColumn:"Atlasīt kolonnu",labelSort:"Kārtot",labelSortAsc:"Kārtot augošā secībā",labelSortDsc:"Kārtot dilstošā secībā",msgFetchingData:"Notiek datu ienese...",msgNoData:"Nav parādāmu datu.",msgInitializing:"Notiek inicializēšana...",msgColumnResizeWidthValidation:"Platuma vērtībai ir jābūt veselam skaitlim.",msgScrollPolicyMaxCountSummary:"Pārsniegts maksimālais rindu skaits tabulas ritināšanai.",msgScrollPolicyMaxCountDetail:"Lūdzu, atkārtoti ielādējiet mazāku datu kopu.",msgStatusSortAscending:"{0} kārtots augošā secībā.",msgStatusSortDescending:"{0} kārtots dilstošā secībā."},"oj-ojTabs":{labelCut:"Izgriezt",labelPasteBefore:"Ielīmēt pirms",labelPasteAfter:"Ielīmēt pēc",labelRemove:"Noņemt",labelReorder:"Pārkārtot",removeCueText:"Noņemams"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Meklēšanas lauks",noMatchesFound:"Nav atrasta neviena atbilstība",oneMatchesFound:"Atrasta viena atbilstība",moreMatchesFound:"Atrastas {num} atbilstības",filterFurther:"Pieejami papildu rezultāti; lūdzu, turpiniet filtrēšanu."},"oj-ojSwitch":{SwitchON:"Ieslēgt",SwitchOFF:"Izslēgt"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nav atrasta neviena atbilstība",oneMatchesFound:"Atrasta viena atbilstība",moreMatchesFound:"Atrastas {num} atbilstības",filterFurther:"Pieejami papildu rezultāti; lūdzu, turpiniet filtrēšanu."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nav atrasta neviena atbilstība",oneMatchFound:"Atrasta viena atbilstība",multipleMatchesFound:"Atrastas {num} atbilstības",nOrMoreMatchesFound:"Atrastas {num} vai vairāk atbilsmes",cancel:"Atcelt",labelAccOpenDropdown:"izvērst",noResultsLine1:"Rezultāti nav atrasti",noResultsLine2:"Nevarēja atrast neko atbilstošu jūsu meklēšanas kritērijiem."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Nav atrasta neviena atbilstība",oneMatchesFound:"Atrasta viena atbilstība",moreMatchesFound:"Atrastas {num} atbilstības"},"oj-ojTree":{stateLoading:"Notiek ielāde...",labelNewNode:"Jauns mezgls",labelMultiSelection:"Vairākatlase",labelEdit:"Rediģēt",labelCreate:"Izveidot",labelCut:"Izgriezt",labelCopy:"Kopēt",labelPaste:"Ielīmēt",labelPasteAfter:"Ielīmēt pēc",labelPasteBefore:"Ielīmēt pirms",labelRemove:"Noņemt",labelRename:"Pārdēvēt",labelNoData:"Nav datu"},"oj-ojPagingControl":{labelAccPaging:"Lapdale",labelAccPageNumber:"{pageNum}. lapas saturs ielādēts",labelAccNavFirstPage:"Pirmā lapa",labelAccNavLastPage:"Pēdējā lapa",labelAccNavNextPage:"Nākamā lapa",labelAccNavPreviousPage:"Iepriekšējā lapa",labelAccNavPage:"Lapa",labelLoadMore:"Parādīt vairāk...",labelLoadMoreMaxRows:"Ir sasniegts maksimālais ierobežojums, kas ir {maxRows} rindas",labelNavInputPage:"Lapa",labelNavInputPageMax:"no {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} no {pageMax} vienumiem",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} no vismaz {pageMax} vienumiem",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} no aptuveni {pageMax} vienumiem",msgItemRangeNoTotal:"{pageFrom}-{pageTo} vienumi",fullMsgItem:"{pageTo} no {pageMax} vienumiem",fullMsgItemAtLeast:"{pageTo} no vismaz {pageMax} vienumiem",fullMsgItemApprox:"{pageTo} no aptuveni {pageMax} vienumiem",msgItemNoTotal:"{pageTo} vienumi",msgItemRangeCurrent:"{pageFrom}–{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"no",msgItemRangeOfAtLeast:"no vismaz",msgItemRangeOfApprox:"no apm.",msgItemRangeItems:"pozīcijas",tipNavInputPage:"Pāriet uz lapu",tipNavPageLink:"Pāriet uz lapu {pageNum}",tipNavNextPage:"Tālāk",tipNavPreviousPage:"Atpakaļ",tipNavFirstPage:"Pirmais",tipNavLastPage:"Pēdējais",pageInvalid:{summary:"Ievadītā lapas vērtība ir nederīga.",detail:"Lūdzu, ievadiet vērtību, kas ir lielāka par 0."},maxPageLinksInvalid:{summary:"maxPageLinks vērtība ir nederīga.",detail:"Lūdzu, ievadiet vērtību, kas ir lielāka par 4."}},"oj-ojMasonryLayout":{labelCut:"Izgriezt",labelPasteBefore:"Ielīmēt pirms",labelPasteAfter:"Ielīmēt pēc"},"oj-panel":{labelAccButtonExpand:"Izvērst",labelAccButtonCollapse:"Sakļaut",labelAccButtonRemove:"Noņemt",labelAccFlipForward:"Pāršķirt uz priekšu",labelAccFlipBack:"Pāršķirt atpakaļ",tipDragToReorder:"Velciet, lai pārkārtotu",labelAccDragToReorder:"Velciet, lai pārkārtotu; ir pieejama kontekstizvēlne"},"oj-ojChart":{labelDefaultGroupName:"Grupa {0}",labelSeries:"Sērija",labelGroup:"Grupa",labelDate:"Datums",labelValue:"Vērtība",labelTargetValue:"Mērķis",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Procenti",labelLow:"Zems",labelHigh:"Augsts",labelOpen:"Atvērt",labelClose:"Aizvērt",labelVolume:"Apjoms",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Maks.",labelOther:"Cits",tooltipPan:"Panoramēt",tooltipSelect:"Slīdošā teksta atlase",tooltipZoom:"Slīdošā teksta tālummaiņa",componentName:"Diagramma"},"oj-dvtBaseGauge":{componentName:"Mērogs"},"oj-ojDiagram":{promotedLink:"{0} saite",promotedLinks:"{0} saites",promotedLinkAriaDesc:"Netiešs",componentName:"Diagramma"},"oj-ojGantt":{componentName:"Ganta shēma",accessibleDurationDays:"{0} dienas",accessibleDurationHours:"{0} stundas",accessibleTaskInfo:"Sākuma laiks ir {0}, beigu laiks ir {1}, ilgums ir {2}",accessibleMilestoneInfo:"Laiks ir {0}",accessibleRowInfo:"{0}. rinda",accessibleTaskTypeMilestone:"Atskaites punkts",accessibleTaskTypeSummary:"Kopsavilkums",accessiblePredecessorInfo:"{0} priekšteči",accessibleSuccessorInfo:"{0} pēcteči",accessibleDependencyInfo:"Atkarības tips {0}, savieno {1} ar {2}",startStartDependencyAriaDesc:"no sākuma līdz sākumam",startFinishDependencyAriaDesc:"no sākuma līdz beigām",finishStartDependencyAriaDesc:"no beigām līdz sākumam",finishFinishDependencyAriaDesc:"no beigām līdz beigām",tooltipZoomIn:"Tuvināt",tooltipZoomOut:"Tālināt",labelLevel:"Līmenis",labelRow:"Rinda",labelStart:"Sākums",labelEnd:"Beigas",labelDate:"Datums",labelBaselineStart:"Pamatlīnijas sākums",labelBaselineEnd:"Pamatlīnijas beigas",labelBaselineDate:"Pamatlīnijas datums",labelLabel:"Etiķete",labelProgress:"Norise",labelMoveBy:"Pārvietot par",labelResizeBy:"Mainīt izmērus par",taskMoveInitiated:"Uzsākta uzdevuma pārvietošana",taskResizeEndInitiated:"Sāktas uzdevuma izmēru maiņas beigas",taskResizeStartInitiated:"Sākts uzdevuma izmēru maiņas sākums",taskMoveSelectionInfo:"Atlasīti {0} citi",taskResizeSelectionInfo:"Atlasīti {0} citi",taskMoveInitiatedInstruction:"Lai pārvietotu, izmantojiet bulttaustiņus",taskResizeInitiatedInstruction:"Izmantojiet bulttaustiņus, lai mainītu izmērus",taskMoveFinalized:"Uzdevuma pārvietošana ir pabeigta",taskResizeFinalized:"Uzdevuma izmēru maiņa ir pabeigta",taskMoveCancelled:"Uzdevuma pārvietošana ir atcelta",taskResizeCancelled:"Uzdevuma izmēru maiņa ir atcelta",taskResizeStartHandle:"Uzdevuma izmēru maiņas sākšanas turis",taskResizeEndHandle:"Uzdevuma izmēru maiņas beigu turis"},"oj-ojLegend":{componentName:"Apzīmējumi",tooltipExpand:"Izvērst",tooltipCollapse:"Sakļaut"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Citi",labelGroup:"Grupa",labelSize:"Lielums",labelAdditionalData:"Papildu dati",componentName:"{0} lodziņš"},"oj-ojPictoChart":{componentName:"Attēlu diagramma"},"oj-ojSparkChart":{componentName:"Diagramma"},"oj-ojSunburst":{labelColor:"Krāsa",labelSize:"Lielums",tooltipExpand:"Izvērst",tooltipCollapse:"Sakļaut",componentName:"Stari"},"oj-ojTagCloud":{componentName:"Taga mākonis"},"oj-ojThematicMap":{componentName:"Tematiskā karte",areasRegion:"Apgabali",linksRegion:"Saites",markersRegion:"Marķieri"},"oj-ojTimeAxis":{componentName:"Laika ass"},"oj-ojTimeline":{componentName:"Laika skala",accessibleItemDesc:"Apraksts ir {0}.",accessibleItemEnd:"Beigu laiks ir {0}.",accessibleItemStart:"Sākuma laiks ir {0}.",accessibleItemTitle:"Virsraksts ir {0}.",labelSeries:"Sērija",tooltipZoomIn:"Tuvināt",tooltipZoomOut:"Tālināt",labelStart:"Sākums",labelEnd:"Beigas",labelDate:"Datums",labelTitle:"Virsraksts",labelDescription:"Apraksts"},"oj-ojTreemap":{labelColor:"Krāsa",labelSize:"Lielums",tooltipIsolate:"Izolēt",tooltipRestore:"Atjaunot",componentName:"Koka karte"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Nederīgi dati",labelNoData:"Nav parādāmu datu",labelClearSelection:"Notīrīt atlasi",labelDataVisualization:"Datu vizualizācija",stateSelected:"Atlasīts",stateUnselected:"Neatlasīts",stateMaximized:"Maksimizēts",stateMinimized:"Minimizēts",stateExpanded:"Izvērsts",stateCollapsed:"Sakļauts",stateIsolated:"Izolēts",stateHidden:"Paslēpts",stateVisible:"Redzams",stateDrillable:"Detalizējams",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} no {1}"},"oj-ojNavigationList":{defaultRootLabel:"Navigācijas saraksts",hierMenuBtnLabel:"Hierarhijas izvēlnes poga",selectedLabel:"atlasīts",previousIcon:"Iepriekšējais",msgFetchingData:"Notiek datu ienese...",msgNoData:"Nav neviena parādāma vienuma. ",overflowItemLabel:"Vairāk",accessibleReorderTouchInstructionText:"Divreiz pieskarieties un turiet. Sagaidiet signālu un tad velciet, lai pārkārtotu.",accessibleReorderBeforeItem:"Pirms {item}",accessibleReorderAfterItem:"Pēc {item}",labelCut:"Izgriezt",labelPasteBefore:"Ielīmēt pirms",labelPasteAfter:"Ielīmēt pēc",labelRemove:"Noņemt",removeCueText:"Noņemams"},"oj-ojSlider":{noValue:"ojSlider nav vērtības",maxMin:"Maksimālā vērtība nedrīkst būt mazāka vai vienāda ar minimālo vērtību",valueRange:"Vērtībai ir jābūt diapazonā no minimālās līdz maksimālajai vērtībai",optionNum:"Opcija {option} nav skaitlis",invalidStep:"Nederīgs solis; solim ir jābūt > 0"},"oj-ojDialog":{labelCloseIcon:"Aizvērt"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Notiek ieiešana uznirstošajā logā. Nospiediet F6, lai naviģētu starp uznirstošo logu un saistīto vadīklu.",ariaLiveRegionInitialFocusNone:"Uznirstošais logs ir atvērts. Nospiediet F6, lai naviģētu starp uznirstošo logu un saistīto vadīklu.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Notiek ieiešana uznirstošajā logā. Uznirstošo logu var aizvērt, naviģējot uz pēdējo saiti uznirstošajā logā.",ariaLiveRegionInitialFocusNoneTouch:"Uznirstošais logs ir atvērts. Naviģējiet uz nākamo saiti, lai uznirstošajā logā izveidotu fokusu.",ariaFocusSkipLink:"Divreiz pieskarieties, lai naviģētu uz atvērto uznirstošo logu.",ariaCloseSkipLink:"Divreiz pieskarieties, lai aizvērtu atvērto uznirstošo logu."},"oj-ojRefresher":{ariaRefreshLink:"Aktivizējiet saiti, lai atsvaidzinātu saturu",ariaRefreshingLink:"Notiek satura atsvaidzināšana",ariaRefreshCompleteLink:"Atsvaidzināšana ir pabeigta"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Rādīt sākuma darbības",ariaShowEndActionsDescription:"Rādīt beigu darbības",ariaHideActionsDescription:"Paslēpt darbības"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Nav atbilstošas grupas galvenes",ariaOthersLabel:"skaitlis",ariaInBetweenText:"Starp {first} un {second}",ariaKeyboardInstructionText:"Nospiediet Enter, lai atlasītu vērtību.",ariaTouchInstructionText:"Divreiz pieskarieties un turiet, lai ieietu žestu režīmā, tad velciet uz augšu vai uz leju, lai pielāgotu vērtību."},"oj-ojMenu":{labelCancel:"Atcelt",ariaFocusSkipLink:"Fokuss ir izvēlnē, divreiz pieskarieties vai pārvelciet, lai pārvietotu fokusu uz pirmo izvēlnes elementu."},"oj-ojColorSpectrum":{labelHue:"Tonis",labelOpacity:"Necaurspīdīgums",labelSatLum:"Piesātinājums/spilgtums",labelThumbDesc:"Krāsu spektra četrvirzienu slīdnis."},"oj-ojColorPalette":{labelNone:"Nav"},"oj-ojColorPicker":{labelSwatches:"Paletes",labelCustomColors:"Pielāgotas krāsas",labelPrevColor:"Iepriekšējā krāsa",labelDefColor:"Noklusējuma krāsa",labelDelete:"Dzēst",labelDeleteQ:"Vai dzēst?",labelAdd:"Pievienot",labelAddColor:"Pievienot krāsu",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Tonis",labelSliderSaturation:"Piesātinājums",labelSliderSat:"Pies.",labelSliderLightness:"Gaišums",labelSliderLum:"Spilgtums",labelSliderAlpha:"Alfa",labelOpacity:"Necaurspīdīgums",labelSliderRed:"Sarkans",labelSliderGreen:"Zaļš",labelSliderBlue:"Zils"},"oj-ojFilePicker":{dropzoneText:"Nometiet failus šeit vai noklikšķiniet, lai augšupielādētu",singleFileUploadError:"Augšupielādējiet pa vienam failam.",singleFileTypeUploadError:"Nevar augšupielādēt failus ar tipu {fileType}.",multipleFileTypeUploadError:"Nevar augšupielādēt failus ar tipu: {fileTypes}.",dropzonePrimaryText:"Velciet un nometiet",secondaryDropzoneText:"Savu failu šeit vai pārlūkojiet",secondaryDropzoneTextMultiple:"Savus failus šeit vai pārlūkojiet",unknownFileType:"nezināms"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Pašlaik notiek"},"oj-ojMessage":{labelCloseIcon:"Aizvērt",categories:{error:"Kļūda",warning:"Brīdinājums",info:"Informācija",confirmation:"Apstiprinājums"}},"oj-ojMessages":{labelLandmark:"Ziņojumi",ariaLiveRegion:{navigationFromKeyboard:"Notiek ieeja ziņojumu apgabalā. Nospiediet F6, lai naviģētu atpakaļ uz iepriekšējo fokusēto elementu.",navigationToTouch:"Ziņojumu apgabalā ir jauni ziņojumi. Izmantojiet balss ieraksta rotoru, lai naviģētu uz ziņojumu robežzīmi.",navigationToKeyboard:"Ziņojumu apgabalā ir jauni ziņojumi. Nospiediet F6, lai naviģētu uz visnesenāko ziņojumu apgabalu.",newMessage:"Ziņojuma kategorija {category}. {summary}."}}});
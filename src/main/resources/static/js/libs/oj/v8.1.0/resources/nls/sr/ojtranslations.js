define({"oj-message":{fatal:"Неотклоњиво",error:"Грешка",warning:"Упозорење",info:"Информације",confirmation:"Потврда","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Вредност није у очекиваном формату.",detail:"Унесите вредност у очекиваном формату.","plural-separator":", ",hint:{summary:"Пример: {exampleValue}",detail:"Унесите вредност у истом формату као у овом примеру: '{exampleValue}'.","detail-plural":"Унесите вредност у истом формату као у овим примерима: '{exampleValue}'."},optionHint:{detail:"Прихваћена вредност за опцију '{propertyName}' је '{propertyValueValid}'.","detail-plural":"Прихваћене вредности за опцију '{propertyName}' су '{propertyValueValid}'."},optionTypesMismatch:{summary:"Вредност за опцију '{requiredPropertyName}' је неопходна када је опција '{propertyName}' подешена као '{propertyValue}'."},optionTypeInvalid:{summary:"Није наведена вредност очекиваног типа за опцију '{propertyName}'."},optionOutOfRange:{summary:"Вредност {propertyValue} је изван опсега за опцију '{propertyName}'."},optionValueInvalid:{summary:"Наведена је неважећа вредност '{propertyValue}' за опцију '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' није у очекиваном нумеричком формату."},shortLongUnsupportedParse:{summary:"'short' и 'long' нису подржани за анализу конвертора.",detail:"Промените компоненту у 'readonly'. Поља 'readonly' не позивају функцију анализе конвертора."},currencyFormatMismatch:{summary:"'{value}' није у очекиваном формату за валуту."},percentFormatMismatch:{summary:"'{value}' није у очекиваном процентуалном формату."},invalidNumberFormat:{summary:"Наведена вредност '{value}' није важећи број.",detail:"Наведите важећи број."}},color:{invalidFormat:{summary:"Неважећи формат за боју.",detail:"Неважећа спецификација опције формата за боју."},invalidSyntax:{summary:"Неважећа спецификација за боју.",detail:"Спецификација за боју није у складу са CSS3 стандардом."}},datetime:{datetimeOutOfRange:{summary:"Вредност '{value}' је изван опсега за '{propertyName}'.",detail:"Унесите вредност између '{minValue}' и '{maxValue}'.",hour:"сат",minute:"минут",second:"секунда",millisec:"милисекунда",month:"месец",day:"дан",year:"година","month name":"име месеца",weekday:"радни дан"},dateFormatMismatch:{summary:"'{value}' није у очекиваном формату за датум."},invalidTimeZoneID:{summary:"Наведен је неважећи ID временске зоне {timeZoneID}."},nonExistingTime:{summary:"Не постоји време уноса јер се поклапа са периодом преласка на летње рачунање времена."},missingTimeZoneData:{summary:"Недостају подаци временске зоне. Позовите захтев 'ojs/ojtimezonedata' да би се учитали подаци о временској зони."},timeFormatMismatch:{summary:"'{value}' није у очекиваном временском формату."},datetimeFormatMismatch:{summary:"'{value}' није у очекиваном формату за датум и време."},dateToWeekdayMismatch:{summary:"Дан '{date}' није '{weekday}'.",detail:"Унесите име радног дана који одговара датуму."},invalidISOString:{invalidRangeSummary:"Вредност '{value}' је ван опсега за поље '{propertyName}' у нисци ISO 8601 '{isoStr}'.",summary:"Наведена ниска '{isoStr}' није важећа ISO 8601 ниска.",detail:"Наведите важећу ISO 8601 ниску."}}},"oj-validator":{length:{hint:{min:"Унесите {min} или више знакова.",max:"Унесите {max} или мање знакова.",inRange:"Унесите {min} или више знакова, максимум је {max}.",exact:"Унесите {length} знак(ов)а."},messageDetail:{tooShort:"Унесите {min} или више знакова, не мање од тога.",tooLong:"Унесите {max} или мање знакова, не више од тога."},messageSummary:{tooShort:"Унели сте премало знакова.",tooLong:"Унели сте превише знакова."}},range:{number:{hint:{min:"Унесите број који је већи од {min} или једнак томе.",max:"Унесите број који је мањи од {max} или једнак томе.",inRange:"Унесите број између {min} и {max}.",exact:"Унесите број {num}."},messageDetail:{rangeUnderflow:"Број мора да буде већи од {min} или једнак томе..",rangeOverflow:"Број мора да буде мањи од{max} или једнак томе.",exact:"Број мора да буде {num}."},messageSummary:{rangeUnderflow:"Број је премали.",rangeOverflow:"Број је превисок."}},datetime:{hint:{min:"Унесите датум и време као {min} или касније.",max:"Унесите датум и време као {max} или раније.",inRange:"Унесите датум и време између {min} и {max}."},messageDetail:{rangeUnderflow:"Датум и време морају да буду {min} или касније.",rangeOverflow:"Датум и време морају да буду {max} или пре тога."},messageSummary:{rangeUnderflow:"Датум и време су раније у односу на минимални датум и време.",rangeOverflow:"Датум и време су касније у односу на максимални датум и време."}},date:{hint:{min:"Унесите датум као {min} или каснији.",max:"Унесите датум као {max} или ранији.",inRange:"Унесите датум између {min} и {max}."},messageDetail:{rangeUnderflow:"Датум мора да буде {min} или каснији.",rangeOverflow:"Датум мора да буде {max} или ранији."},messageSummary:{rangeUnderflow:"Датум је ранији у односу на минимални датум.",rangeOverflow:"Датум је каснији у односу на максимални датум."}},time:{hint:{min:"Унесите време као {min} или касније.",max:"Унесите време као {max} или раније.",inRange:"Унесите време између {min} и {max}."},messageDetail:{rangeUnderflow:"Време мора да буде {min} или касније.",rangeOverflow:"Време мора да буде {max} или раније."},messageSummary:{rangeUnderflow:"Време је раније у односу на минимално време.",rangeOverflow:"Време је касније у односу на максимално време."}}},restriction:{date:{messageSummary:"Датум {value} је онемогућен унос.",messageDetail:"Датум {value} не сме да буде онемогућен унос."}},regExp:{summary:"Формат је неисправан.",detail:"Вредност '{value}' мора да се поклапа са обрасцем: '{pattern}'."},required:{summary:"Вредност је обавезна.",detail:"Морате да унесете вредност."}},"oj-ojEditableValue":{loading:"Учитавање"},"oj-ojInputDate":{done:"Готово",cancel:"Откажи",prevText:"Претходно",nextText:"Следеће",currentText:"Данас",weekHeader:"Нед.",tooltipCalendar:"Изаберите датум.",tooltipCalendarTime:"Изаберите датум и време.",tooltipCalendarDisabled:"Бирање датума је онемогућено.",tooltipCalendarTimeDisabled:"Бирање датума и времена је онемогућено.",picker:"Бирач",weekText:"Недеља",datePicker:"Бирач датума",inputHelp:"Притисните дугме са стрелицом надоле или нагоре да бисте приступили календару.",inputHelpBoth:"Притисните дугме са стрелицом надоле или нагоре да бисте приступили календару и Shift + стрелица надоле или Shift + стрелица нагоре да бисте приступили падајућем менију са временом.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Откажи",okText:"У реду",currentTimeText:"Сада",hourWheelLabel:"Сат",minuteWheelLabel:"Минут",ampmWheelLabel:"AMPM",tooltipTime:"Избор времена.",tooltipTimeDisabled:"Бирање времена је онемогућено.",inputHelp:"Притисните дугме са стрелицом надоле или нагоре да бисте приступили падајућем менију са временом.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Вредност мора да се поклапа са овим обрасцем: '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"Приказује се страница {pageIndex} од укупно {pageCount}",labelAccArrowNextPage:"Изаберите 'Следеће' да бисте приказали следећу страницу",labelAccArrowPreviousPage:"Изаберите 'Претходно' да бисте приказали претходну страницу",tipArrowNextPage:"Следеће",tipArrowPreviousPage:"Претходно"},"oj-ojDataGrid":{accessibleSortAscending:"{id} сортирано растућим редоследом",accessibleSortDescending:"{id} сортирано опадајућим редоследом",accessibleActionableMode:"Пређите на функционални режим.",accessibleNavigationMode:"Пређите на навигациони режим, притисните дугме F2 да бисте прешли на режим за уређивање или режим за предузимање радњи.",accessibleEditableMode:"Пређите на режим за уређивање, притисните дугме 'escape' да бисте напустили мрежу података.",accessibleSummaryExact:"Ово је мрежа података са {rownum} редова и {colnum} колона",accessibleSummaryEstimate:"Ово је мрежа података са непознатим бројем редова и колона",accessibleSummaryExpanded:"Број тренутно проширених редова је {num}",accessibleRowExpanded:"Проширени редови",accessibleRowCollapsed:"Скупљени редови",accessibleRowSelected:"Изабран је ред {row}",accessibleColumnSelected:"Изабрана је колона {column}",accessibleStateSelected:"изабрано",accessibleMultiCellSelected:"Број изабраних ћелија је {num}",accessibleColumnSpanContext:"{extent} по ширини",accessibleRowSpanContext:"{extent} по висини",accessibleRowContext:"Ред {index}",accessibleColumnContext:"Колона {index}",accessibleRowHeaderContext:"Заглавље реда {index}",accessibleColumnHeaderContext:"Заглавље колоне {index}",accessibleRowEndHeaderContext:"Заглавље краја реда {index}",accessibleColumnEndHeaderContext:"Заглавље краја колоне {index}",accessibleRowHeaderLabelContext:"Ознака заглавља реда {level}",accessibleColumnHeaderLabelContext:"Ознака заглавља колоне {level}",accessibleRowEndHeaderLabelContext:"Ознака заглавља краја реда {level}",accessibleColumnEndHeaderLabelContext:"Ознака заглавља краја колоне {level}",accessibleLevelContext:"Ниво {level}",accessibleRangeSelectModeOn:"Укључен је режим за додавање изабраног опсега ћелија.",accessibleRangeSelectModeOff:"Искључен је режим за додавање изабраног опсега ћелија.",accessibleFirstRow:"Дошли сте до првог реда.",accessibleLastRow:"Дошли сте до последњег реда.",accessibleFirstColumn:"Дошли сте до прве колоне",accessibleLastColumn:"Дошли сте до последње колоне.",accessibleSelectionAffordanceTop:"Ручица за избор одозго.",accessibleSelectionAffordanceBottom:"Ручица за избор одоздо.",msgFetchingData:"Подаци се преузимају...",msgNoData:"Нема ставки за приказ.",labelResize:"Промени величину",labelResizeWidth:"Промени ширину",labelResizeHeight:"Промени висину",labelSortRow:"Сортирај редове",labelSortRowAsc:"Сортирај редове по растућем редоследу",labelSortRowDsc:"Сортирај редове по опадајућем редоследу",labelSortCol:"Сортирај колоне",labelSortColAsc:"Сортирај колоне по растућем редоследу",labelSortColDsc:"Сортирај колоне по опадајућем редоследу",labelCut:"Исеци",labelPaste:"Налепи",labelEnableNonContiguous:"Омогући избор ставки које нису суседне",labelDisableNonContiguous:"Онемогући избор ставки које нису суседне",labelResizeDialogSubmit:"У реду",labelResizeDialogCancel:"Откажи"},"oj-ojRowExpander":{accessibleLevelDescription:"Ниво {level}",accessibleRowDescription:"Ниво {level}, ред {num} од {total}",accessibleRowExpanded:"Проширени ред",accessibleRowCollapsed:"Скупљени ред",accessibleStateExpanded:"проширено",accessibleStateCollapsed:"скупљено"},"oj-ojListView":{msgFetchingData:"Подаци се преузимају...",msgNoData:"Нема ставки за приказ.",msgItemsAppended:"Број ставки додатих на крај је {count}.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Двапут додирните и задржите. Сачекајте звук и превуците ставку да бисте преуредили.",accessibleReorderBeforeItem:"Пре {item}",accessibleReorderAfterItem:"После {item}",accessibleReorderInsideItem:"Унутра {item}",accessibleNavigateSkipItems:"Број ставки које се прескачу: {numSkip}",labelCut:"Исеци",labelCopy:"Копирај",labelPaste:"Налепи",labelPasteBefore:"Налепи испред",labelPasteAfter:"Налепи после"},"oj-_ojLabel":{tooltipHelp:"Помоћ",tooltipRequired:"Обавезно"},"oj-ojLabel":{tooltipHelp:"Помоћ",tooltipRequired:"Обавезно"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Смањивање",tooltipIncrement:"Повећавање"},"oj-ojTable":{accessibleSortAscending:"{id} сортирано растућим редоследом",accessibleSortDescending:"{id} сортирано опадајућим редоследом",labelAccSelectionAffordanceTop:"Ручица за избор одозго",labelAccSelectionAffordanceBottom:"Ручица за избор одоздо",labelEnableNonContiguousSelection:"Омогући избор ставки које нису суседне",labelDisableNonContiguousSelection:"Онемогући избор ставки које нису суседне",labelResize:"Промени величину",labelResizePopupSubmit:"У реду",labelResizePopupCancel:"Откажи",labelResizePopupSpinner:"Промена величине колоне",labelSelectRow:"Избор реда",labelEditRow:"Уређивање реда",labelSelectAndEditRow:"Избор и уређивање реда",labelSelectColumn:"Избор колоне",labelSort:"Сортирај",labelSortAsc:"Сортирај растуће",labelSortDsc:"Сортирај опадајуће",msgFetchingData:"Подаци се преузимају...",msgNoData:"Нема података за приказ.",msgInitializing:"Покретање...",msgColumnResizeWidthValidation:"Вредност за ширину мора да буде цео број.",msgScrollPolicyMaxCountSummary:"Прекорачен је максималан број редова за померање табеле.",msgScrollPolicyMaxCountDetail:"Поново учитајте уз мањи скуп података.",msgStatusSortAscending:"{0} сортирано растућим редоследом.",msgStatusSortDescending:"{0} сортирано опадајућим редоследом."},"oj-ojTabs":{labelCut:"Исеци",labelPasteBefore:"Налепи испред",labelPasteAfter:"Налепи после",labelRemove:"Уклони",labelReorder:"Промени редослед",removeCueText:"Може да се уклони"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"Поље за претрагу",noMatchesFound:"Није пронађен ниједан погодак",oneMatchesFound:"Пронађен је један резултат",moreMatchesFound:"Број пронађених резултата: {num}",filterFurther:"Доступно је више резултата, користите даље филтере."},"oj-ojSwitch":{SwitchON:"Укључено",SwitchOFF:"Искључено"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Није пронађен ниједан погодак",oneMatchesFound:"Пронађен је један резултат",moreMatchesFound:"Број пронађених резултата: {num}",filterFurther:"Доступно је више резултата, користите даље филтере."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Није пронађен ниједан погодак",oneMatchFound:"Пронађен је један резултат",multipleMatchesFound:"Број пронађених резултата: {num}",nOrMoreMatchesFound:"Број пронађених резултата: {num} или више",cancel:"Откажи",labelAccOpenDropdown:"прошири",noResultsLine1:"Резултати нису пронађени",noResultsLine2:"Нису пронађени подударни резултати за претрагу.."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Није пронађен ниједан погодак",oneMatchesFound:"Пронађен је један резултат",moreMatchesFound:"Број пронађених резултата: {num}"},"oj-ojTree":{stateLoading:"Учитавање...",labelNewNode:"Нови чвор",labelMultiSelection:"Вишеструки избор",labelEdit:"Уређивање",labelCreate:"Креирај",labelCut:"Исеци",labelCopy:"Копирај",labelPaste:"Налепи",labelPasteAfter:"Налепи после",labelPasteBefore:"Налепи испред",labelRemove:"Уклони",labelRename:"Преименуј",labelNoData:"Нема података"},"oj-ojPagingControl":{labelAccPaging:"Нумерисање страница",labelAccPageNumber:"Учитан је садржај странице {pageNum}.",labelAccNavFirstPage:"Прва страница",labelAccNavLastPage:"Последња страница",labelAccNavNextPage:"Следећа страница",labelAccNavPreviousPage:"Претходна страница",labelAccNavPage:"Страница",labelLoadMore:"Прикажи више...",labelLoadMoreMaxRows:"Достигнуто је максимално ограничење ({maxRows}) броја редова",labelNavInputPage:"Страница",labelNavInputPageMax:"од {pageMax}",fullMsgItemRange:"Ставке: {pageFrom}-{pageTo} од {pageMax}",fullMsgItemRangeAtLeast:"Ставке: {pageFrom}-{pageTo} од најмање {pageMax}",fullMsgItemRangeApprox:"Ставке: {pageFrom}-{pageTo} од око {pageMax}",msgItemRangeNoTotal:"Ставке: {pageFrom}-{pageTo}",fullMsgItem:"Ставке: {pageTo} од {pageMax}",fullMsgItemAtLeast:"Ставке: {pageTo} од најмање {pageMax}",fullMsgItemApprox:"Ставке: {pageTo} од око {pageMax}",msgItemNoTotal:"Ставке: {pageTo}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"од",msgItemRangeOfAtLeast:"од најмање",msgItemRangeOfApprox:"од око",msgItemRangeItems:"ставке",tipNavInputPage:"Иди на страницу",tipNavPageLink:"Иди на страницу {pageNum}",tipNavNextPage:"Следеће",tipNavPreviousPage:"Претходно",tipNavFirstPage:"Прво",tipNavLastPage:"Последње",pageInvalid:{summary:"Унета је неважећа вредност за страницу.",detail:"Унесите вредност већу од 0."},maxPageLinksInvalid:{summary:"Вредност за maxPageLinks је неважећа.",detail:"Унесите вредност већу од 4."}},"oj-ojMasonryLayout":{labelCut:"Исеци",labelPasteBefore:"Налепи испред",labelPasteAfter:"Налепи после"},"oj-panel":{labelAccButtonExpand:"Прошири",labelAccButtonCollapse:"Скупи",labelAccButtonRemove:"Уклони",labelAccFlipForward:"Окрени напред",labelAccFlipBack:"Окрени назад",tipDragToReorder:"Превуците да бисте променили распоред",labelAccDragToReorder:"Превуците да бисте променили распоред, доступан је контекстуални мени"},"oj-ojChart":{labelDefaultGroupName:"Група {0}",labelSeries:"Серија",labelGroup:"Група",labelDate:"Датум",labelValue:"Вредност",labelTargetValue:"Циљ",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Проценат",labelLow:"Ниско",labelHigh:"Високо",labelOpen:"Отвори",labelClose:"Затвори",labelVolume:"Диск",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Мин.",labelMax:"Макс.",labelOther:"Остало",tooltipPan:"Pan приказ",tooltipSelect:"Избор помичног текста",tooltipZoom:"Увећавање помичног текста",componentName:"Графикон"},"oj-dvtBaseGauge":{componentName:"Мерач"},"oj-ojDiagram":{promotedLink:"{0} веза",promotedLinks:"Број веза: {0}",promotedLinkAriaDesc:"Индиректно",componentName:"Дијаграм"},"oj-ojGantt":{componentName:"Гантов графикон",accessibleDurationDays:"{0} дана",accessibleDurationHours:"{0} ч.",accessibleTaskInfo:"Време почетка је {0}, време завршетка је {1}, трајање је {2}",accessibleMilestoneInfo:"Време је {0}",accessibleRowInfo:"Ред {0}",accessibleTaskTypeMilestone:"Кључна тачка",accessibleTaskTypeSummary:"Резиме",accessiblePredecessorInfo:"Претходници: {0}",accessibleSuccessorInfo:"Наследници: {0}",accessibleDependencyInfo:"Тип зависности {0}, повезује {1} са {2}",startStartDependencyAriaDesc:"од почетка до почетка",startFinishDependencyAriaDesc:"од почетка до краја",finishStartDependencyAriaDesc:"од краја до почетка",finishFinishDependencyAriaDesc:"од краја до краја",tooltipZoomIn:"Увећај",tooltipZoomOut:"Умањи",labelLevel:"Ниво",labelRow:"Ред",labelStart:"Почетак",labelEnd:"Крај",labelDate:"Датум",labelBaselineStart:"Почетак одобрења",labelBaselineEnd:"Завршетак одобрења",labelBaselineDate:"Датум одобрења",labelLabel:"Ознака",labelProgress:"Напредовање",labelMoveBy:"Померање за",labelResizeBy:"Промена величине за",taskMoveInitiated:"Покренут је задатак премештања",taskResizeEndInitiated:"Покренут је завршетак задатка промене величине",taskResizeStartInitiated:"Покренут је почетак задатка промене величине",taskMoveSelectionInfo:"Други избори: {0}",taskResizeSelectionInfo:"Други избори: {0}",taskMoveInitiatedInstruction:"Користите стрелице да бисте се померали",taskResizeInitiatedInstruction:"Користите стрелице да бисте променили величину",taskMoveFinalized:"Задатак премештања је довршен",taskResizeFinalized:"Задатак промене величине је довршен",taskMoveCancelled:"Задатак премештања је отказан",taskResizeCancelled:"Задатак промене величине је отказан",taskResizeStartHandle:"Ручица за започињање задатка промене величине",taskResizeEndHandle:"Ручица за завршетак задатка промене величине"},"oj-ojLegend":{componentName:"Легенда",tooltipExpand:"Прошири",tooltipCollapse:"Скупи"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Остало",labelGroup:"Група",labelSize:"Величина",labelAdditionalData:"Додатни подаци",componentName:"{0} оквир"},"oj-ojPictoChart":{componentName:"Илустровани графикон"},"oj-ojSparkChart":{componentName:"Графикон"},"oj-ojSunburst":{labelColor:"Боја",labelSize:"Величина",tooltipExpand:"Прошири",tooltipCollapse:"Скупи",componentName:"Sunburst графикон"},"oj-ojTagCloud":{componentName:"Облак ознака"},"oj-ojThematicMap":{componentName:"Тематска мапа",areasRegion:"Области",linksRegion:"Везе",markersRegion:"Маркери"},"oj-ojTimeAxis":{componentName:"Временска оса"},"oj-ojTimeline":{componentName:"Временска линија",accessibleItemDesc:"Опис је {0}.",accessibleItemEnd:"Време завршетка је {0}.",accessibleItemStart:"Време почетка је {0}.",accessibleItemTitle:"Наслов је {0}.",labelSeries:"Серија",tooltipZoomIn:"Увећај",tooltipZoomOut:"Умањи",labelStart:"Почетак",labelEnd:"Крај",labelDate:"Датум",labelTitle:"Наслов",labelDescription:"Опис"},"oj-ojTreemap":{labelColor:"Боја",labelSize:"Величина",tooltipIsolate:"Изолација",tooltipRestore:"Враћање",componentName:"Treemap графикон"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Неважећи подаци",labelNoData:"Нема података за приказ",labelClearSelection:"Обриши избор",labelDataVisualization:"Визуелизација података",stateSelected:"Изабрано",stateUnselected:"Неизабрано",stateMaximized:"Увећано",stateMinimized:"Умањено",stateExpanded:"Проширено",stateCollapsed:"Скупљено",stateIsolated:"Изоловано",stateHidden:"Сaкривено",stateVisible:"Видљиво",stateDrillable:"Може да се детаљно анализира",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} од {1}"},"oj-ojNavigationList":{defaultRootLabel:"Листа за навигацију",hierMenuBtnLabel:"Дугме хијерархијског менија",selectedLabel:"изабрано",previousIcon:"Претходно",msgFetchingData:"Подаци се преузимају...",msgNoData:"Нема ставки за приказ.",overflowItemLabel:"Више",accessibleReorderTouchInstructionText:"Двапут додирните и задржите. Сачекајте звук и превуците ставку да бисте преуредили.",accessibleReorderBeforeItem:"Пре {item}",accessibleReorderAfterItem:"После {item}",labelCut:"Исеци",labelPasteBefore:"Налепи испред",labelPasteAfter:"Налепи после",labelRemove:"Уклони",removeCueText:"Може да се уклони"},"oj-ojSlider":{noValue:"ojSlider нема ниједну вредност",maxMin:"Максимум мора да буде већи од минимума или једнак томе",valueRange:"Вредност мора да буде у распону између минимума и максимума",optionNum:"{option} опција није број",invalidStep:"Неважећи корак, корак мора да буде >0"},"oj-ojDialog":{labelCloseIcon:"Затвори"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Прелазак у искачући прозор. Притисните F6 да бисте прелазили између искачућег прозора и повезане контроле.",ariaLiveRegionInitialFocusNone:"Отворен је искачући прозор. Притисните F6 да бисте прелазили између искачућег прозора и повезане контроле.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Прелазак у искачући прозор. Искачући прозор може да се затвори одласком на последњу везу унутар искачућег прозора.",ariaLiveRegionInitialFocusNoneTouch:"Отворен је искачући прозор. Идите на следећу везу да бисте установили фокус унутар искачућег прозора.",ariaFocusSkipLink:"Двапут додирните да бисте прешли на отворени искачући прозор.",ariaCloseSkipLink:"Двапут додирните да бисте затворили отворени искачући прозор."},"oj-ojRefresher":{ariaRefreshLink:"Активирајте везу да бисте освежили садржај",ariaRefreshingLink:"Освежавање садржаја",ariaRefreshCompleteLink:"Освежавање је завршено"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Приказ почетних радњи",ariaShowEndActionsDescription:"Приказ завршних радњи",ariaHideActionsDescription:"Сакривање радњи"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Нема ниједне групе заглавља која се подудара",ariaOthersLabel:"број",ariaInBetweenText:"Између {first} и {second}",ariaKeyboardInstructionText:"Притисните 'enter' да бисте изабрали вредност.",ariaTouchInstructionText:"Двапут додирните и задржите да бисте прешли на режим гестикулације, а затим превуците нагоре или надоле да бисте прилагодили вредност."},"oj-ojMenu":{labelCancel:"Откажи",ariaFocusSkipLink:"Фокус је у оквиру менија, двапут додирните или брзо превуците да бисте померили фокус на прву ставку менија."},"oj-ojColorSpectrum":{labelHue:"Нијанса",labelOpacity:"Непрозирност",labelSatLum:"Засићеност/осветљење",labelThumbDesc:"Клизач у четири смера за подешавање спектрума боја."},"oj-ojColorPalette":{labelNone:"Ниједно"},"oj-ojColorPicker":{labelSwatches:"Узорци боја",labelCustomColors:"Прилагођене боје",labelPrevColor:"Претходна боја",labelDefColor:"Подразумевана боја",labelDelete:"Избриши",labelDeleteQ:"Избрисати?",labelAdd:"Додај",labelAddColor:"Додај боју",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Нијанса",labelSliderSaturation:"Засићеност",labelSliderSat:"Зас.",labelSliderLightness:"Светло",labelSliderLum:"Осветљење",labelSliderAlpha:"Алфа",labelOpacity:"Непрозирност",labelSliderRed:"Црвена",labelSliderGreen:"Зелена",labelSliderBlue:"Плава"},"oj-ojFilePicker":{dropzoneText:"Овде отпустите датотеке или кликните да бисте их отпремили",singleFileUploadError:"Отпремајте једну по једну датотеку.",singleFileTypeUploadError:"Не можете да отпремате датотеке типа {fileType}.",multipleFileTypeUploadError:"Не можете да отпремате датотеке типа: {fileTypes}.",dropzonePrimaryText:"Превуците и отпустите",secondaryDropzoneText:"Своју датотеку овде или претражите",secondaryDropzoneTextMultiple:"Своје датотеке овде или претражите",unknownFileType:"непознато"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"У току"},"oj-ojMessage":{labelCloseIcon:"Затвори",categories:{error:"Грешка",warning:"Упозорење",info:"Информације",confirmation:"Потврда"}},"oj-ojMessages":{labelLandmark:"Поруке",ariaLiveRegion:{navigationFromKeyboard:"Прелазак на област за поруке. Притисните F6 да бисте се вратили на елемент који је пре тога био у фокусу.",navigationToTouch:"Област за поруке садржи нове поруке. Користите ротор за гласовне команде да бисте прешли на означену област за поруке.",navigationToKeyboard:"Област за поруке садржи нове поруке. Притисните F6 да бисте прешли на регион најновије поруке.",newMessage:"Категорија порука {category}. {summary}."}}});
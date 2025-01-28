window.addEventListener('DOMContentLoaded', function(){ MicroModal.init({
    onShow: modal => console.info(`${modal.id} отображается` ),
    onClose: modal => console.info(`${modal.id} скрывается`),
    openTrigger: 'data-micromodal-trigger',
    closeTrigger: 'data-micromodal-close',
    openClass: 'is-open',
    disableScroll: true,
    disableFocus: false,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    debugMode: true [10] });
 })
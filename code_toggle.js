// Builds on http://chris-said.io/2016/02/13/how-to-make-polished-jupyter-presentations-with-optional-code-visibility/
// to inject a navbar button in the nbviewer UI and to make the snippet easily reusable across notebooks, i.e.:
// %%html
// <script src="https://cdn.rawgit.com/parente/4c3e6936d0d7a46fd071/raw/2af9515fbe8b776bf8e1c41d8dc662146993bd0d/code_toggle.js"></script>
$(document).ready(function(){
    function onShow() {
        $('div.input').show(100, function() {
            $('div.cell').css({padding: '5px', border: '1px'});
        });
    }

    function onHide() {
        $('div.input').hide(100, function() {
            $('div.cell').css({padding: 0, border: 0});
        });
    }

    window.code_toggle = function() {
        (window.code_shown) ? onHide() : onShow();
        window.code_shown = !window.code_shown
    }
    if($('body.nbviewer').length) {
        $('<li><a href="javascript:window.code_toggle()" title="Show/Hide Code"><span class="fa fa-eye fa-2x menu-icon"></span><span class="menu-text">Show/Hide Code</span></a></li>').appendTo('.navbar-right');
        window.code_shown=false;
        onHide();
    }
});
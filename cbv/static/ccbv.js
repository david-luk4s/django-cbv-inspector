// Namespace CCBV functionality
var CCBV = {
    klass_list: function() { return {
        /* Methods relating to klass lists */
        get_secondary_klasses: function () {
            /* Get lists containing only secondary klasses,
            and <li>s with secondary klasses from lists with primary as well. */
            secondary_lists = $('.klass-list:not(:has(li.primary))');
            other_secondary_lis = $('.klass-list').not(secondary_lists).find('li.secondary');
            return $.merge(secondary_lists, other_secondary_lis);
        },
        hide_secondary: function () {
            this.get_secondary_klasses().hide();
        },
        toggle_secondary: function () {
            var klasses = this.get_secondary_klasses();
            if (!klasses.is(':animated')){
                klasses.slideToggle();
            }
            return klasses;
        }
    };}()
};
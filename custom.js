$(function () {
    if (config.texts) {
        $.each(config.texts, function (index, item) {
            let p = $("<p>").html(item);
            if (config.imgs && config.imgs[item]) {
                let img = $("<img>").attr({
                    "src": config.imgs[item],
                    "class": "text-img"
                });
                p.append(img);
            }
            $("#texts-container").append(p);
        });
    }
});

$(function () {
    $.each(config.desc, function (key, value) {
        $("#" + key).html(value);
    });
});

$.getJSON("developers.json", function (json) {
    $.map(json, function (item) {
        console.log(item);

        if(item.resume_url.lenth = 0 ){
            item.resume_url = "#";
        }

        if(item.personal_url.lenth = 0 ){
            item.personal_url = "#";
        }

        $('<div class="col-md-4"><div class="card mb-4 shadow-sm"><div class="card-body"><h3 class="mb-3">' + item.name + '</h3><p class="card-text">در ' + item.work_at + ' کار می کند و در ' + item.skills.join(' ') + ' مهارت دارد.</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><a href="'+item.resume_url+'" class="btn btn-sm btn-outline-secondary">رزومه</a><a href="'+item.personal_url+'" class="btn btn-sm btn-outline-secondary">سایت شخصی</a></div></div></div></div></div>').appendTo("#box");
    });
});
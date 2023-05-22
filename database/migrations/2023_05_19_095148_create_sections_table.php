<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->id();
            $table->text('what_we_do')->nullable();
            $table->text('our_vision')->nullable();
            $table->text('contact_us')->nullable();

            $table->string('logo_menu')->nullable();
            $table->string('logo_home')->nullable();
            $table->string('facebook')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('tiktok')->nullable();
            $table->string('instagram')->nullable();
            $table->string('twitter')->nullable();

            $table->string('video_title')->nullable();
            $table->string('aboutus_title')->nullable();
            $table->string('our_services_title')->nullable();
            $table->string('the_directives_title')->nullable();
            $table->string('team_title')->nullable();
            $table->string('articles_title')->nullable();
            $table->string('job_offers_title')->nullable();
            $table->string('contact_us_title')->nullable();

            $table->string('slogan1')->nullable();
            $table->string('slogan2')->nullable();
            $table->text('services_description')->nullable();
            $table->text('about_description')->nullable();
            $table->text('directives_description')->nullable();
            $table->text('team_description')->nullable();
            $table->string('slogan3')->nullable();
            $table->text('articles_description')->nullable();
            $table->text('jobs_description')->nullable();
            $table->text('contact_description')->nullable();
            $table->string('contact_adresse')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('slogan4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sections');
    }
};

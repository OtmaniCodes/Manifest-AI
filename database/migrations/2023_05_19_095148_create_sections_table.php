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
